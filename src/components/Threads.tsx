import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Color, Texture } from 'ogl';

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

// JS port of the GLSL Perlin2D hash — bakes two decorrelated noise fields into R+G channels
function generatePerlinTexture(size: number): Uint8Array {
  const data = new Uint8Array(size * size * 4);

  function perlin2D(px: number, py: number): number {
    const pix = Math.floor(px);
    const piy = Math.floor(py);
    const pfx = px - pix;
    const pfy = py - piy;
    const pfx1 = pfx - 1;
    const pfy1 = pfy - 1;

    // Hash corners (same mod-71 trick as the GLSL)
    let ptx0 = pix - Math.floor(pix / 71) * 71;
    let ptx1 = (pix + 1) - Math.floor((pix + 1) / 71) * 71;
    let pty0 = piy - Math.floor(piy / 71) * 71;
    let pty1 = (piy + 1) - Math.floor((piy + 1) / 71) * 71;
    ptx0 += 26; ptx1 += 26;
    pty0 += 161; pty1 += 161;
    const a = ptx0 * ptx0; const b = ptx1 * ptx1;
    const c = pty0 * pty0; const d = pty1 * pty1;
    const pt00 = a * c; const pt10 = b * c;
    const pt01 = a * d; const pt11 = b * d;

    const hx00 = (pt00 / 951.135664) % 1;
    const hx10 = (pt10 / 951.135664) % 1;
    const hx01 = (pt01 / 951.135664) % 1;
    const hx11 = (pt11 / 951.135664) % 1;
    const hy00 = (pt00 / 642.949883) % 1;
    const hy10 = (pt10 / 642.949883) % 1;
    const hy01 = (pt01 / 642.949883) % 1;
    const hy11 = (pt11 / 642.949883) % 1;

    const gx00 = hx00 - 0.49999; const gy00 = hy00 - 0.49999;
    const gx10 = hx10 - 0.49999; const gy10 = hy10 - 0.49999;
    const gx01 = hx01 - 0.49999; const gy01 = hy01 - 0.49999;
    const gx11 = hx11 - 0.49999; const gy11 = hy11 - 0.49999;

    const s = 1.4142135623730950;
    const g00 = (1 / Math.sqrt(gx00 * gx00 + gy00 * gy00)) * (gx00 * pfx + gy00 * pfy) * s;
    const g10 = (1 / Math.sqrt(gx10 * gx10 + gy10 * gy10)) * (gx10 * pfx1 + gy10 * pfy) * s;
    const g01 = (1 / Math.sqrt(gx01 * gx01 + gy01 * gy01)) * (gx01 * pfx + gy01 * pfy1) * s;
    const g11 = (1 / Math.sqrt(gx11 * gx11 + gy11 * gy11)) * (gx11 * pfx1 + gy11 * pfy1) * s;

    const bx = pfx * pfx * pfx * (pfx * (pfx * 6 - 15) + 10);
    const by = pfy * pfy * pfy * (pfy * (pfy * 6 - 15) + 10);
    const bx1 = 1 - bx;
    const by1 = 1 - by;

    return g00 * bx1 * by1 + g10 * bx * by1 + g01 * bx1 * by + g11 * bx * by;
  }

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      // Map pixel to noise-space so the texture tiles over 16 noise units
      const nx = (x / size) * 16;
      const ny = (y / size) * 16;
      // R channel: first noise field, G channel: second (offset by 100 for decorrelation)
      const n1 = perlin2D(nx, ny);
      const n2 = perlin2D(nx + 100, ny + 100);
      data[i]     = Math.round(((n1 + 1) / 2) * 255); // R
      data[i + 1] = Math.round(((n2 + 1) / 2) * 255); // G
      data[i + 2] = 0;
      data[i + 3] = 255;
    }
  }
  return data;
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;
uniform sampler2D uNoise;

#define PI 3.1415926538

const int u_line_count = 24;
const float u_line_width = 9.0;
const float u_line_blur = 5.0;

// Sample pre-baked Perlin noise from texture (R channel)
float noiseR(vec2 coords) {
    return texture2D(uNoise, coords / 16.0).r * 2.0 - 1.0;
}

// Sample pre-baked Perlin noise from texture (G channel — decorrelated)
float noiseG(vec2 coords) {
    return texture2D(uNoise, coords / 16.0).g * 2.0 - 1.0;
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        noiseR(vec2(time_scaled, st.x + perc) * 2.5),
        noiseG(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const Threads: React.FC<ThreadsProps> = ({
  color = [1, 1, 1],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // dpr: 1 — skip retina rendering; soft lines don't benefit from 2x pixels
    const renderer = new Renderer({ alpha: true, dpr: 1 });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.appendChild(gl.canvas);

    // Pre-bake Perlin noise into a 512x512 texture — eliminates all heavy ALU math from the shader
    const NOISE_SIZE = 512;
    const noiseData = generatePerlinTexture(NOISE_SIZE);
    const noiseTex = new Texture(gl, {
      image: noiseData,
      width: NOISE_SIZE,
      height: NOISE_SIZE,
      wrapS: gl.REPEAT,
      wrapT: gl.REPEAT,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
      generateMipmaps: false,
      flipY: false,
    });

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height),
        },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uNoise: { value: noiseTex },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      program.uniforms.iResolution.value.r = w;
      program.uniforms.iResolution.value.g = h;
      program.uniforms.iResolution.value.b = w / h;
    }
    window.addEventListener('resize', resize);
    resize();

    let cx = 0.5, cy = 0.5, tx = 0.5, ty = 0.5;

    function onMove(e: MouseEvent) {
      const r = container.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width;
      ty = 1 - (e.clientY - r.top) / r.height;
    }
    function onLeave() { tx = 0.5; ty = 0.5; }

    if (enableMouseInteraction) {
      container.addEventListener('mousemove', onMove);
      container.addEventListener('mouseleave', onLeave);
    }

    // Skip rendering when off-screen but keep the rAF loop alive to avoid cold GPU restarts
    let isVisible = true;
    let pausedAt = 0;
    let timeOffset = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (!isVisible && wasVisible) {
          pausedAt = program.uniforms.iTime.value;
        }
        if (isVisible && !wasVisible) {
          // Will be picked up on the next already-scheduled frame
          timeOffset = performance.now() * 0.001 - pausedAt;
        }
      },
      { threshold: 0 }
    );
    observer.observe(container);

    function update(t: number) {
      rafRef.current = requestAnimationFrame(update);

      // Always loop, but skip rendering when off-screen — keeps GPU pipeline warm
      if (!isVisible) return;

      if (enableMouseInteraction) {
        cx += 0.05 * (tx - cx);
        cy += 0.05 * (ty - cy);
        program.uniforms.uMouse.value[0] = cx;
        program.uniforms.uMouse.value[1] = cy;
      }

      program.uniforms.iTime.value = t * 0.001 - timeOffset;
      renderer.render({ scene: mesh });
    }
    rafRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      if (enableMouseInteraction) {
        container.removeEventListener('mousemove', onMove);
        container.removeEventListener('mouseleave', onLeave);
      }
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.deleteTexture(noiseTex.texture);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, amplitude, distance, enableMouseInteraction]);

  return <div ref={containerRef} className="w-full h-full relative" {...rest} />;
};

export default Threads;
