# Autonymo Website Restructure Plan

## The Problem with the Current Site

The current autonymo.com reads like a generic AI agency. It lists capabilities (automation agents, voice agents, lead qualification, data & analytics) but doesn't answer the buyer's real question: **"Do you solve MY specific problem?"**

The early majority buyer — the person you're now selling to — doesn't want "AI automation." They want to see their industry, their pain, their workflow reflected back at them with a concrete solution attached.

BenAI's structure works because each `/solution` page is a self-contained sales page for a specific buyer. Someone searching "AI SEO system" lands on `/ai-seo-solutions` and sees a complete pitch tailored to them. They never need to visit the homepage.

---

## Proposed Site Architecture

```
autonymo.com/                          ← Homepage (hub)
├── /real-estate-os                    ← Real Estate OS landing page
├── /health-services-os                ← Health Services OS landing page
├── /lead-generation-os                ← Lead Generation OS landing page
├── /custom-solutions                  ← Custom AI Solutions (audit-led)
├── /about                             ← Team, story, values
├── /blog                              ← Content / thought leadership (future)
└── /book-a-call                       ← Unified booking page
```

### URL Convention

Include `-os` in the slug for all Operating System pages. This reinforces the core positioning — you're not selling one-off automations, you're selling a system that runs their operations. The "OS" framing is a differentiator and should be visible in the URL. `/custom-solutions` stays without the OS suffix since it's the audit-led consulting funnel, not a packaged OS.

---

## Page-by-Page Breakdown

### 1. Homepage — `autonymo.com/`

**Purpose:** Position Autonymo clearly, route visitors to the right OS page fast, and build enough credibility that cold traffic doesn't bounce.

**What the current site gets wrong:** It tries to explain everything at once — voice agents, automation, lead qualification, data analytics — without giving the visitor a clear path. The pricing section on the homepage is premature (nobody books a €5K/month retainer from a homepage).

**Proposed structure:**

**Hero Section**
- Headline that positions Autonymo as an AI Studio building industry-specific operating systems — not a generic automation agency.
- Suggested direction: *"AI systems built for how your industry actually works"* or *"Your industry has specific problems. We build specific AI solutions."*
- Sub-headline: One sentence about what you do (build and maintain AI operating systems for businesses).
- Primary CTA: "See our solutions" (scrolls to OS cards) or "Book a call."
- Social proof strip: client logos (ProApi, Cemav, etc.)

**Operating Systems Section** (the core of the homepage)
- 3–4 cards, each linking to a dedicated OS page:
  - **Real Estate** — tagline + 1-line description of what it solves + "Learn more →"
  - **Health Services** — same pattern
  - **Lead Generation** — same pattern
  - **Custom Solutions** — "Don't fit a vertical? We run an AI audit and build exactly what you need."
- This section IS the homepage. It should be visually dominant.

**How We Work** (simplified)
- 3 steps max. Not 5. The current 5-step process (Intro Call → Consulting → Development → Testing → Follow-up) is too granular for a homepage. Simplify to:
  1. **Discover** — We learn your workflows and identify where AI creates real ROI.
  2. **Build** — We design and deploy your AI system, integrated with your existing tools.
  3. **Grow** — Ongoing optimization, support, and new capabilities as your needs evolve.

**Trust & Credibility Block**
- "Why Autonymo" — 3–4 differentiators, but framed as benefits not features. Not "Experienced Prompt Engineers" (nobody outside the AI world cares about this). Instead:
  - "Built for your industry, not generic AI"
  - "Live in weeks, not months"
  - "Works with your existing tools — no migration required"
  - "Ongoing partnership, not a one-off project"

**Optional: One short case study / result**
- A single, concrete result from ProApi or Cemav. Not a testimonial — a metric. E.g., "Reduced contract processing time by 80% for a real estate agency in Girona."

**Footer CTA**
- "Ready to see what AI can do for your business?" → Book a call

**What to REMOVE from the homepage:**
- The detailed pricing section (move to individual OS pages or remove entirely — pricing should happen on calls for now)
- The Before vs. After section (too generic, doesn't add credibility)
- The comparison table vs. "Other Development Agencies" (comes across as defensive)
- The detailed FAQ (move to a /faq page or trim to 3 essential questions)
- The voice agent demo widget (confusing on a homepage that's supposed to route people)

---

### 2. Real Estate OS — `autonymo.com/real-estate-os`

**Purpose:** Self-contained sales page for real estate professionals. Someone landing here from a cold email, LinkedIn post, or Google search should get everything they need to book a call.

**Audience:** Real estate agencies (2–20 people), property managers, promoters. Spanish market primarily, DACH secondary.

**Structure:**

**Hero**
- Industry-specific headline: *"AI built for how real estate actually works"*
- Sub-headline addressing the core pain: managing properties, owners, leads, and contracts with too few people and too many manual steps.
- CTA: Book a call

**Problem Section**

Mirror the pain points from the RE Assessment Framework's discovery questions — these
are the exact things you ask on calls, so the website should pre-qualify visitors by
making them nod:

  - Leads come in from portals but you take hours (or days) to respond — by then they've moved on
  - Owners don't know what's happening with their property, so they lose trust and switch agencies
  - Contracts, checklists, and closing paperwork eat hours every week that could go to selling
  - Properties sit stale for months with no alerts, no price adjustments, no proactive action
  - Your CRM is a black box — data goes in but nothing useful comes out

**Solutions / Modules**

Present your Real Estate OS capabilities as modules. These must match the 7 solution
areas defined in the RE Assessment Framework v2 (ClickUp: Catalog of Offers → Real
Estate OS → RE OS Framework + Offers):

  - **Lead Response Engine** — Automatic response to incoming leads via WhatsApp, pre-qualification, enriched alerts to agents, intelligent distribution
  - **Active Listing Management** — Stale listing alerts, justiprecio monitoring, post-visit owner reports, activity tracking per property
  - **Owner Relationship Engine** — Automated nurturing of owners NOT currently in portfolio, re-engagement sequences, periodic market updates
  - **Contract & Document Automation** — AI-generated contracts (reserva, arras, commission agreements), document checklists, closing milestone tracking
  - **Property Listing Intelligence** — Automated capture of private listings from portals, market valuation reports (CMA), listing description optimization
  - **Visit Management** — Calendar coordination (agent + owner + buyer), automated reminders, post-visit feedback capture and owner reporting
  - **Marketing & Content Engine** — Social media content generation, email campaigns to segmented database, property marketing materials

Each module: short description + what it replaces (the manual process it kills).

**Important:** Lead with the 4 proven solutions (Lead Response, Active Listing Management,
Owner Relationship, Contract Automation). Visit Management and Marketing & Content are
real but less mature — position them as "coming soon" or "Phase 2" on the page. Property
Listing Intelligence sits in between — proven concept but complex to deploy.

**Base layer note:** The CRM integration layer underpins everything. Don't list it as a
separate module on the website — instead, mention in the "How It Works" section that
you integrate with existing CRMs (Witei, Inmovilla, etc.) or provide an Airtable-based
alternative.

**How It Works** (for this vertical)
- Same 3 steps but with real estate examples:
  1. Discover: "We audit your current CRM, lead flow, and contract process"
  2. Build: "We deploy your Real Estate OS, connected to your existing tools"
  3. Grow: "Monthly optimization + new modules as your agency scales"

**Social Proof**
- ProApi case study (once you have permission/results to share)
- Or at minimum: "Currently deployed in real estate agencies across Catalonia"

**Pricing Indication**

Align with the tiered pricing model from the RE Assessment Framework v2. Don't show
exact numbers on the website — use directional framing by agency size:

  - *"For small agencies (2–4 people): Get started with your first AI module from €500 setup + a simple monthly fee."*
  - *"For growing agencies (4–8 people): Full OS deployment with multiple modules, typically €800–1,500 setup per solution."*
  - *"All plans include ongoing support, optimization, and maintenance."*

Key principle from the framework: the monthly fee covers ALL active solutions (not per
solution). This incentivizes expansion and simplifies the offer. Frame it on the page
as "one monthly partnership fee" rather than listing retainer tiers.

Do NOT put per-solution pricing tables on the website. That level of detail is for the
proposal after the assessment call. The website should make them feel the price is
accessible, not give them a calculator.

**CTA: Book a Call**

---

### 3. Health Services OS — `autonymo.com/health-services-os`

**Purpose:** Sales page for dental clinics, medical practices, therapy centers, wellness clinics.

**Same structural pattern as Real Estate**, but with health-specific content:

**Pains:**
- Patient no-shows and last-minute cancellations
- Reactivating dormant patients is manual and inconsistent
- Multi-doctor scheduling complexity
- Patient communication scattered across phone, WhatsApp, email

**Modules:**
- **Patient Reactivation Engine** — Automated outreach to dormant patients
- **Smart Scheduling** — AI-powered booking across multiple practitioners
- **Patient Communication Hub** — Centralized, automated patient touchpoints
- **Review & Reputation Management** — Automated post-visit review requests

**Social Proof:** Cemav case study (when ready)

**Pricing:** Similar framing as Real Estate but adjusted for clinic economics.

---

### 4. Lead Generation OS — `autonymo.com/lead-generation-os`

**Purpose:** Sales page for businesses or agencies that want an outbound lead generation system.

**Key difference from the other OS pages:** This is more service-oriented. You're not selling a product they log into — you're selling a managed system that produces meetings. The page should reflect this.

**Pains:**
- Cold outreach is inconsistent or nonexistent
- Salespeople spend time finding leads instead of closing them
- No system for enriching and qualifying prospects at scale
- Existing tools generate contacts, not conversations

**What You Deliver:**
- Fully configured cold outreach engine
- EU-compliant lead sourcing and enrichment
- Multi-channel sequences (email, LinkedIn)
- Qualified meetings delivered to your calendar
- Monthly reporting and optimization

**How It Works:**
1. We define your ICP and messaging together
2. We build and launch your outreach engine in 5–7 days
3. Leads flow into your pipeline — we optimize monthly

**Pricing framing:** "From €3,000 setup + monthly optimization retainer" (adjust based on your current offer with Paul)

---

### 5. Custom Solutions — `autonymo.com/custom-solutions`

**Purpose:** Catch-all for prospects who don't fit a vertical OS. This is the AI audit
funnel. Aligns with the Custom Solutions OS GTM Playbook v3.0 (ClickUp: Catalog of
Offers → Custom Solutions OS → GTM Playbook v3.0).

**This page should NOT look like the other OS pages.** It should feel more consultative
— like hiring an expert, not buying a product.

**Key positioning from the playbook:** "AI Studio with full dev team — not limited to
no-code. Can build custom platforms, dashboards, portals, AI agents, and legacy system
integrations. What feels like €100K enterprise software, delivered for €10-20K."

**Structure:**

**Hero:** *"Your business is unique. Your AI solution should be too."*

**Who This Is For**

Align with the ICP priority ranking from the playbook:

  - **Professional services** — Law firms, accounting, consultancies (5–50 employees)
  - **Industrial & manufacturing** — Production, logistics, supply chain (20–75 employees, strong DACH/Mittelstand angle)
  - **Agencies** — Marketing, creative, staffing (5–30 employees)
  - **Healthcare, E-commerce & retail** — secondary verticals

Don't just say "we work with any industry." List the specific verticals — it builds
credibility and helps the visitor self-identify.

**The Process: AI Operations Audit**

Present the engagement arc from the playbook:

  1. **Free Strategy Call** (15–30 min) — We assess if AI can move the needle for your business
  2. **AI Operations Audit** (7–10 business days) — Deep dive into your workflows, tools, and data. You receive a prioritized implementation roadmap with timelines and expected ROI.
  3. **Implementation** (2–8 weeks) — We build and deploy your custom AI system
  4. **Ongoing Partnership** — "We become your AI department" — continuous optimization, new capabilities, strategic guidance

**Pricing framing:** "The audit starts at €2,500. Implementation typically ranges from
€5,000 to €25,000+ depending on complexity. Ongoing AI partnership from €1,500/month."

Note: The playbook anchors the audit at €3,000 with flexibility by company size
(€2,000–2,500 for small, €3,500–5,000 for complex/DACH). On the website, use the
lower end as the "starting at" number to reduce friction.

**What We Actually Build** (differentiator section)

This is where you separate from no-code agencies. Show the breadth:
  - Custom AI agents and chatbots
  - Internal dashboards and portals
  - Workflow automation across existing tools
  - Legacy system integrations
  - Data pipelines and analytics
  - Voice AI agents

**Industries We've Worked With:**
- Real estate, healthcare, professional services, manufacturing
- "If your industry isn't listed, that's exactly why this page exists."

**CTA: Book a Strategy Call**

---

### 6. About — `autonymo.com/about`

Keep this simple. Team photos, short bios (Arnau and Kalvin), the origin story (Deloitte background, seeing businesses struggle with AI, decided to build an AI studio that actually delivers). Values: speed, clarity, partnership.

---

## Navigation Structure

```
[Logo]  Solutions ▾  |  About  |  Book a Call (CTA button)
            ├── Real Estate OS
            ├── Health Services OS
            ├── Lead Generation OS
            └── Custom Solutions
```

The nav should make the OS pages accessible from anywhere. "Solutions" is a dropdown that routes to each OS page. No more anchor links to sections on the same page — each offering gets its own URL and its own SEO surface.

---

## Content & SEO Implications

Each OS page becomes a standalone SEO asset. Over time:
- `/real-estate-os` can rank for "AI for real estate agencies," "real estate CRM automation," etc.
- `/health-services-os` can rank for "AI for dental clinics," "patient reactivation automation," etc.
- `/lead-generation-os` can rank for "AI lead generation service," "cold outreach automation," etc.

This is a massive improvement over the current single-page site which has no SEO structure at all.

---

## Language Strategy

Start with English as the default. Add `/es/` and `/de/` subfolders when you're ready to localize. Don't try to do three languages on day one — get the English structure right, validate the messaging, then translate. Kalvin can lead the German localization for DACH outreach.

---

## What to Build First

**Priority order:**

1. **Homepage** — New structure, OS cards, simplified messaging
2. **Real Estate OS page** — You have the most content and a live client here
3. **Custom Solutions page** — This is your active sales funnel via cold email
4. **Health Services OS page** — Build once Cemav is more stable
5. **Lead Generation OS page** — Build once the offer with Paul is validated
6. **About page** — Low priority but easy to do

You can ship #1 and #2 in a first sprint and immediately start routing cold email traffic to `/real-estate-os` or `/custom-solutions` instead of the generic homepage. That alone should improve conversion.

---

## Key Principles

- **Every page should work as a landing page.** Most visitors won't enter through the homepage — they'll come from a cold email, a LinkedIn post, or a Google search. Each page must stand alone. Someone coming from a cold email about real estate should land on `/real-estate-os` and never need to visit the homepage.
- **Lead with the industry, not the technology.** Say "real estate" before you say "AI." The buyer identifies with their problem, not your tool.
- **One CTA per page.** Book a call. That's it. No "try our voice agent," no "send us a message," no pricing calculator. Simplify the conversion path.
- **Kill the comparison table.** Comparing yourself to "other agencies" signals insecurity. Let the work speak.
- **Pricing belongs on OS pages, not the homepage.** And even on OS pages, keep it directional (ranges), not precise. Precise pricing happens on calls.
