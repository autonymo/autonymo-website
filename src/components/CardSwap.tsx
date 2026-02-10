"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
  /** Bump this to cycle to the next card (value doesn't matter, just change it) */
  trigger?: number;
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  /** Auto-rotate interval in ms (only when trigger is not used) */
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
  className?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [backface-visibility:hidden] ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
      style={{
        ...rest.style,
        contain: "layout style paint",
        willChange: "transform",
      }}
    />
  )
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement | null>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const ELASTIC_CONFIG = {
  ease: "elastic.out(0.6,0.9)",
  durDrop: 2,
  durMove: 2,
  durReturn: 2,
  promoteOverlap: 0.9,
  returnDelay: 0.05,
} as const;

const LINEAR_CONFIG = {
  ease: "power1.inOut",
  durDrop: 0.8,
  durMove: 0.8,
  durReturn: 0.8,
  promoteOverlap: 0.45,
  returnDelay: 0.2,
} as const;

const CardSwap: React.FC<CardSwapProps> = ({
  trigger,
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
  className,
}) => {
  const controlled = trigger !== undefined;
  const config = easing === "elastic" ? ELASTIC_CONFIG : LINEAR_CONFIG;

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const count = childArr.length;
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [count]
  );

  // Pre-compute all slot positions — avoids recalculating during animations
  const slots = useMemo(
    () => Array.from({ length: count }, (_, i) => makeSlot(i, cardDistance, verticalDistance, count)),
    [count, cardDistance, verticalDistance]
  );

  const order = useRef<number[]>(Array.from({ length: count }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(0);
  const container = useRef<HTMLDivElement>(null);
  const initialised = useRef(false);

  /** Snap all cards to their current order positions (no animation) */
  const snapToOrder = useCallback(() => {
    order.current.forEach((idx, i) => {
      const el = refs[idx].current;
      if (!el) return;
      placeNow(el, slots[i], skewAmount);
    });
  }, [refs, slots, skewAmount]);

  /** Cycle one card: drop front, promote rest, return front to back */
  const swapNext = useCallback(() => {
    if (order.current.length < 2) return;

    // If a timeline is running, kill it and snap to current order first
    if (tlRef.current?.isActive()) {
      tlRef.current.kill();
      snapToOrder();
    }

    const [front, ...rest] = order.current;
    order.current = [...rest, front];

    const elFront = refs[front].current!;
    const tl = gsap.timeline();
    tlRef.current = tl;

    // Drop front card
    tl.to(elFront, {
      y: "+=500",
      duration: config.durDrop,
      ease: config.ease,
    });

    // Promote remaining cards up one slot
    tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
    rest.forEach((idx, i) => {
      const el = refs[idx].current!;
      tl.set(el, { zIndex: slots[i].zIndex }, "promote");
      tl.to(
        el,
        {
          x: slots[i].x,
          y: slots[i].y,
          z: slots[i].z,
          duration: config.durMove,
          ease: config.ease,
        },
        `promote+=${i * 0.15}`
      );
    });

    // Return old front to back of stack
    const backSlot = slots[count - 1];
    tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
    tl.call(
      () => { gsap.set(elFront, { zIndex: backSlot.zIndex }); },
      undefined,
      "return"
    );
    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        duration: config.durReturn,
        ease: config.ease,
      },
      "return"
    );
  }, [refs, slots, count, config, snapToOrder]);

  // Initial placement
  useEffect(() => {
    refs.forEach((r, i) => placeNow(r.current!, slots[i], skewAmount));
    initialised.current = true;
  }, []);

  // Controlled mode: cycle next on trigger change
  useEffect(() => {
    if (!controlled || !initialised.current) return;
    swapNext();
  }, [trigger]);

  // Uncontrolled mode: auto-rotate
  useEffect(() => {
    if (controlled) return;
    intervalRef.current = window.setInterval(swapNext, delay);
    return () => clearInterval(intervalRef.current);
  }, [controlled, delay, swapNext]);

  // Pause on hover (uncontrolled only)
  useEffect(() => {
    if (controlled || !pauseOnHover) return;
    const node = container.current!;
    const pause = () => {
      tlRef.current?.pause();
      clearInterval(intervalRef.current);
    };
    const resume = () => {
      tlRef.current?.play();
      intervalRef.current = window.setInterval(swapNext, delay);
    };
    node.addEventListener("mouseenter", pause);
    node.addEventListener("mouseleave", resume);
    return () => {
      node.removeEventListener("mouseenter", pause);
      node.removeEventListener("mouseleave", resume);
      clearInterval(intervalRef.current);
    };
  }, [controlled, pauseOnHover, delay, swapNext]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className={`relative overflow-visible ${className ?? ""}`.trim()}
      style={{ width, height, perspective: "900px" }}
    >
      {rendered}
    </div>
  );
};

export default memo(CardSwap);
