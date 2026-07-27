---
title: Eliminating 90 production defect overrides—and rebuilding the system behind Bose.com
publishDate: 2024-08-09 00:00:00
img: /images/case/bose/cover-bose-design-system-strike2.png
img_alt: A visual overview of Bose design-system foundations, components, patterns, and governance.
homepageOrder: 3
eyebrow: BOSE · DESIGN SYSTEMS · 2024–2025
showcaseArgument: Bose teams were working from a monolithic design library with 2,000+ components, recurring production defects, and inconsistent implementation logic. I led remediation of the canonical components behind visible site issues, helping the team eliminate 90 defect overrides within three months. I then restructured the library architecture, modernized legacy components, and established clearer foundations, patterns, and governance.
detailAvailability: internal
ctaLabel: View project
description: |
  Bose teams were patching visible defects downstream because canonical components were no longer dependable. As Product Design Lead and design-system owner, I led remediation that removed 90 defect overrides in three months, then restructured the 2,000+ component system for clearer ownership, reuse, and continued evolution.
tags:
  - Design Systems
  - UX Infrastructure
  - Product Design
role:
  - Product Design Lead
  - Design Systems Owner
platforms: Bose.com · Figma design system · Responsive web
result: |
  90 → 0 defect overrides in three months · 2,000+ component system restructured
year: "2024–2025"
---

<style>
  .bose-case-visual,
  .bose-media-figure {
    width: 100%;
    margin: 1.75rem 0 0;
  }

  .bose-case-visual img,
  .bose-media-figure img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--border-subtle);
    border-radius: 1rem;
    background: var(--surface-raised);
  }

  .bose-case-visual figcaption,
  .bose-media-figure figcaption,
  .bose-comparison-copy p,
  .bose-status-note {
    color: var(--text-tertiary);
    font-size: var(--role-meta-size);
    line-height: 1.5;
  }

  .bose-media-grid .bose-media-figure,
  .bose-prototype-grid .bose-media-figure,
  .bose-prototype-solutions .bose-media-figure,
  .bose-nav-comparison .bose-media-figure {
    margin-top: 0;
  }

  .bose-case-visual figcaption,
  .bose-media-figure figcaption {
    max-width: 65ch;
    margin: 0.75rem 0 0;
  }

  .bose-metrics,
  .bose-flow,
  .bose-architecture,
  .bose-system-parts,
  .bose-media-grid,
  .bose-prototype-grid,
  .bose-nav-comparison {
    display: grid;
    width: 100%;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .bose-metrics > div,
  .bose-flow > div,
  .bose-architecture-panel,
  .bose-system-parts > div,
  .bose-naming-example,
  .bose-placeholder-frame {
    border: 1px solid var(--border-subtle);
    border-radius: 0.875rem;
    background: var(--surface-raised);
    padding: 1.25rem;
  }

  .bose-metrics p,
  .bose-flow p,
  .bose-system-parts p,
  .bose-placeholder-frame p,
  .bose-naming-example p,
  .bose-comparison-copy p {
    margin: 0 !important;
  }

  .bose-metrics strong {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
    font-size: clamp(1.45rem, 5vw, 2.35rem);
    line-height: 1.05;
  }

  .bose-metrics span,
  .bose-flow span,
  .bose-architecture-label,
  .bose-placeholder-frame span,
  .bose-naming-example span,
  .bose-comparison-label {
    color: var(--text-tertiary);
    font-size: var(--role-meta-size);
    line-height: 1.4;
  }

  .bose-flow > div {
    position: relative;
  }

  .bose-flow strong,
  .bose-system-parts strong,
  .bose-placeholder-frame strong,
  .bose-naming-example strong {
    display: block;
    margin: 0.25rem 0 0.5rem;
    color: var(--text-primary);
  }

  .bose-flow-step {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    color: var(--text-primary) !important;
    font-weight: var(--weight-emphasis);
  }

  .bose-architecture {
    align-items: stretch;
  }

  .bose-architecture-panel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .bose-monolith {
    display: grid;
    flex: 1;
    place-content: center;
    min-height: 15rem;
    border: 1px solid var(--border-strong);
    border-radius: 0.75rem;
    padding: 2rem;
    text-align: center;
  }

  .bose-monolith strong {
    display: block;
    color: var(--text-primary);
    font-size: clamp(1.35rem, 4vw, 2rem);
    line-height: 1.15;
  }

  .bose-monolith span {
    display: block;
    margin-top: 0.5rem;
    color: var(--text-tertiary);
  }

  .bose-stack {
    display: grid;
    gap: 0.65rem;
  }

  .bose-stack > div {
    border: 1px solid var(--border-strong);
    border-inline-start: 4px solid var(--accent-dark);
    border-radius: 0.65rem;
    padding: 0.85rem 1rem;
    color: var(--text-primary);
    font-weight: var(--weight-emphasis);
  }

  .bose-placeholder-frame {
    display: grid;
    width: 100%;
    min-height: 12rem;
    place-content: center;
    border-style: dashed;
    text-align: center;
  }

  .bose-placeholder-frame span {
    display: block;
    margin-top: 0.5rem;
    overflow-wrap: anywhere;
  }

  .bose-placeholder-frame--landscape {
    aspect-ratio: 16 / 9;
  }

  .bose-placeholder-frame--ultrawide {
    min-height: 10rem;
    aspect-ratio: 6 / 1;
  }

  .bose-placeholder-frame--square {
    min-height: 0;
    aspect-ratio: 1 / 1;
  }

  .bose-naming-example {
    display: grid;
    align-content: center;
    gap: 1rem;
  }

  .bose-naming-shift {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;
    gap: 0.75rem;
  }

  .bose-naming-shift > div {
    border: 1px solid var(--border-strong);
    border-radius: 0.65rem;
    padding: 1rem;
  }

  .bose-naming-arrow {
    color: var(--text-tertiary);
    font-size: 1.5rem;
  }

  .bose-nav-after {
    display: grid;
    gap: 1rem;
    align-items: center;
  }

  .bose-nav-after .bose-placeholder-frame {
    max-width: 28rem;
  }

  .bose-comparison-label {
    display: block;
    margin-bottom: 0.65rem;
    font-weight: var(--weight-emphasis);
    letter-spacing: 0.04em;
  }

  .bose-comparison-copy {
    max-width: 34rem;
  }

  .bose-comparison-copy strong {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    font-size: clamp(1.2rem, 3vw, 1.75rem);
    line-height: 1.15;
  }

  .bose-prototype-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .bose-prototype-solutions {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    width: 100%;
  }

  .bose-prototype-solutions .bose-media-figure {
    min-width: 0;
  }

  .bose-prototype-image-frame {
    display: grid;
    width: 100%;
    aspect-ratio: 1 / 1;
    place-items: center;
    overflow: hidden;
    border: 1px solid var(--border-subtle);
    border-radius: 1rem;
    background: var(--surface-raised);
  }

  .bose-prototype-image-frame img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .bose-prototype-solutions figcaption strong {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
  }

  .bose-status-note {
    width: 100%;
    margin-top: 1rem;
    border-inline-start: 3px solid var(--accent-dark);
    border-radius: 0 0.75rem 0.75rem 0;
    background: var(--surface-raised);
    padding: 0.9rem 1rem;
  }

  .bose-continuity {
    width: 100%;
    margin-top: 1.5rem;
    border-inline-start: 3px solid var(--accent-dark);
    border-radius: 0 0.75rem 0.75rem 0;
    background: var(--surface-raised);
    padding: 1rem 1.25rem;
  }

  .bose-continuity p {
    margin: 0 !important;
  }

  @media (min-width: 50em) {
    .bose-metrics,
    .bose-flow {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .bose-architecture,
    .bose-media-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .bose-system-parts,
    .bose-prototype-solutions {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .bose-nav-after {
      grid-template-columns: minmax(16rem, 0.8fr) minmax(0, 1.2fr);
    }
  }
</style>

> ###### Selected work shown. Internal names, implementation details, and unpublished concepts have been omitted or generalized.

###### THE FAILURE CONDITION

#### Canonical components had become unreliable enough that production required 90 defect patches

Bose.com was shipping from a monolithic design library containing more than 2,000 components. When shared components created visible issues, production overrides corrected individual pages without repairing the source. The site kept moving, but design and implementation drifted further apart—and each patch increased the cost of future change.

<div class="bose-metrics" aria-label="Bose design-system starting conditions">
  <div><strong>90</strong><span>Defect-related production overrides</span></div>
  <div><strong>2,000+</strong><span>Components in one overloaded library</span></div>
  <div><strong>1 source</strong><span>Mixed current, legacy, and exploratory assets</span></div>
  <div><strong>4 teams</strong><span>Design, engineering, content, and creative</span></div>
</div>

<div class="bose-flow" aria-label="Production remediation sequence">
  <div><span class="bose-flow-step">1</span><strong>Visible defect</strong><p>A customer-facing inconsistency surfaced on Bose.com.</p></div>
  <div><span class="bose-flow-step">2</span><strong>Downstream patch</strong><p>A production override corrected the individual instance.</p></div>
  <div><span class="bose-flow-step">3</span><strong>Canonical repair</strong><p>We traced the failure back to shared component logic.</p></div>
  <div><span class="bose-flow-step">4</span><strong>Override removed</strong><p>The repaired source could support future use without the patch.</p></div>
</div>

###### THE FIRST MOVE

#### I repaired the sources causing visible defects before expanding the system

As Product Design Lead and design-system owner, I worked with design, engineering, and content partners to trace recurring defects back to their canonical components. I prioritized customer-facing failures, clarified intended responsive behavior, and aligned component specifications with production implementation.

Within three months, the team had eliminated all 90 defect-related overrides. The sequencing mattered: restoring production integrity created the stability and credibility needed to address the deeper system architecture.

<figure class="bose-case-visual">
  <img src="/images/case/bose/global%20component%20spacing%20-%20initial%20sketch.png" alt="Early proposal for shared component spacing and layout behavior at Bose.">
  <figcaption>Early system work aligning global component spacing and layout behavior.</figcaption>
</figure>

###### THE SYSTEM BEHIND THE FIX

#### The defects exposed a monolithic system that was difficult to trust or maintain

The immediate failures were only one symptom. The overloaded Figma library mixed current components, legacy assets, explorations, and unmerged work. Memory warnings, local component detachment, inconsistent naming, and unclear contribution paths made the dependable source difficult to identify.

<div class="bose-media-grid" aria-label="Monolithic-library evidence and naming example">
  <figure class="bose-media-figure">
    <img src="/images/case/bose/bose-monolith-memory-warning.png" alt="A Figma memory warning made the operational cost of the monolithic library visible.">
    <figcaption>A Figma memory warning made the operational cost of the monolithic library visible.</figcaption>
  </figure>

  <div class="bose-naming-example">
    <span>ONE SMALL EXAMPLE · CLEARER COMPONENT INTENT</span>
    <div class="bose-naming-shift">
      <div><span>Legacy name</span><strong>No-image card</strong><p>Defined by what it lacked.</p></div>
      <span class="bose-naming-arrow" aria-hidden="true">→</span>
      <div><span>Clarified name</span><strong>Text card</strong><p>Named for its actual purpose.</p></div>
    </div>
    <p>Clarifying names, anatomy, and supported behavior made components easier to find and understand without publishing Bose's internal component structure.</p>
  </div>
</div>

<!-- Replace only the memory-warning placeholder with bose-monolith-memory-warning.webp. The naming example is intentionally rendered as public-safe HTML rather than a raw internal screenshot. -->

<div class="bose-architecture" aria-label="Before and after design-system architecture">
  <div class="bose-architecture-panel">
    <span class="bose-architecture-label">BEFORE · ONE MONOLITHIC SOURCE</span>
    <div class="bose-monolith"><strong>2,000+ components</strong><span>Shared logic, legacy assets, experiments, and team-specific needs combined in one file</span></div>
  </div>
  <div class="bose-architecture-panel">
    <span class="bose-architecture-label">AFTER · CLEARER INHERITANCE</span>
    <div class="bose-stack">
      <div>Governance</div>
      <div>Foundations</div>
      <div>Components</div>
      <div>Patterns</div>
      <div>Templates</div>
    </div>
  </div>
</div>

###### THE OPERATING MODEL

#### I turned remediation into a more durable way to evolve the system

<div class="bose-system-parts">
  <div><p><strong>Separate shared layers</strong>I restructured the library around clearer inheritance, publishing boundaries, and ownership instead of asking every team to depend on one unstable file.</p></div>
  <div><p><strong>Modernize component logic</strong>I rebuilt priority legacy components with clearer properties, variables, responsive behavior, and supported configuration paths.</p></div>
  <div><p><strong>Make safe use explicit</strong>I introduced clearer patterns and governance so teams could adapt the system without detaching components or recreating shared behavior.</p></div>
</div>

The goal was not a perfectly tidy Figma file. It was a dependable product foundation that different teams could use, implement, and extend without reopening the same production failures.

#### One example: reducing repeated navigation variants

I designed and handed off a lighter navigation model that consolidated six category-specific variants into one component, with content switched through variables while interaction behavior remained centralized.

<div class="bose-nav-comparison" aria-label="Global navigation before and after comparison">
  <figure class="bose-media-figure">
    <span class="bose-comparison-label">BEFORE · 6 REPEATED VARIANTS</span>
    <img src="/images/case/bose/bose-global-nav-six-variants.png" alt="Six category-specific navigation variants.">
  </figure>

  <div class="bose-nav-after">
    <figure class="bose-media-figure">
      <span class="bose-comparison-label">AFTER · 1 VARIABLE-CONTROLLED COMPONENT</span>
      <img src="/images/case/bose/bose-global-nav-one-component.png" alt="One shared component model.">
    </figure>
    <div class="bose-comparison-copy">
      <strong>Centralized interaction behavior, flexible content</strong>
      <p>One shared structure changed category content through variables instead of duplicating the same interaction model across six variants.</p>
    </div>

  </div>
</div>

<!-- Replace the two placeholder frames with the approved exports. Keep the ultrawide before image full width; keep the square after image beside the explanatory copy on desktop and stacked on mobile. -->

###### AN INITIATIVE IN MOTION

#### I prototyped a reusable alternative to repeated campaign-layout correction

Campaign assets combined background, product imagery, and copy into fixed compositions that required manual repositioning across responsive containers. I separated those layers in a coded prototype, tested responsive behavior, and documented authoring controls for implementation.

<div class="bose-prototype-grid" aria-label="Responsive campaign layout constraint and proposed model">
  <figure class="bose-media-figure">
    <img src="/images/case/bose/bose-responsive-layout-constraint.png" alt="The same flattened campaign composition cropped across wide, tall, square, and variable responsive containers.">
    <figcaption>A single flattened campaign composition could not adapt reliably across the full range of responsive containers.</figcaption>
  </figure>

  <div class="bose-prototype-solutions" aria-label="Responsive layout prototype sequence">
    <figure class="bose-media-figure">
      <div class="bose-prototype-image-frame">
        <img src="/images/case/bose/bose-responsive-layout-layers.png" alt="Prototype separating campaign background, product imagery, and content into independent layers.">
      </div>
      <figcaption><strong>Separate the layers</strong>Background, product imagery, and copy became independently controllable.</figcaption>
    </figure>
    <figure class="bose-media-figure">
      <div class="bose-prototype-image-frame">
        <img src="/images/case/bose/bose-responsive-layout-behavior.png" alt="Prototype testing responsive product-image behavior inside a variable container.">
      </div>
      <figcaption><strong>Test responsive behavior</strong>The model could be evaluated across changing container proportions and placements.</figcaption>
    </figure>
    <figure class="bose-media-figure">
      <div class="bose-prototype-image-frame">
        <img src="/images/case/bose/bose-responsive-layout-controls.png" alt="Prototype controls for content-author scale and position adjustments.">
      </div>
      <figcaption><strong>Validate author controls</strong>Scale and position controls gave authors flexibility within defined system rules.</figcaption>
    </figure>
  </div>
</div>

<div class="bose-status-note">This initiative was prototyped and handed off before my departure; implementation after handoff is unverified.</div>

###### THE OUTCOME

#### The immediate defects were removed, and the system became safer to evolve

<div class="bose-metrics" aria-label="Bose design-system outcomes">
  <div><strong>90 → 0</strong><span>Defect overrides</span></div>
  <div><strong>3 months</strong><span>Production remediation</span></div>
  <div><strong>2,000+</strong><span>Component system addressed</span></div>
  <div><strong>5 layers</strong><span>Governance through templates</span></div>
</div>

The verified result was the elimination of the 90 defect-related production overrides. Beyond that immediate recovery, the system had clearer inheritance, more maintainable component logic, and more explicit paths for teams to use and evolve shared assets.

<div class="bose-continuity">
  <p><strong>Continuity after handoff:</strong> At the end of my tenure, I documented the major initiatives still in motion and assigned a point person to each workstream so the system could continue evolving rather than becoming a loose backlog.</p>
</div>

Takeaway: Restoring a design system is an exercise in sequencing. Fix the customer-facing failure first, then change the architecture and operating model that allowed it to recur.
