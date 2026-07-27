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
  .bose-case-visual {
    width: 100%;
    margin: 1.75rem 0 0;
  }

  .bose-case-visual img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--border-subtle);
    border-radius: 1rem;
    background: var(--surface-raised);
  }

  .bose-case-visual figcaption {
    max-width: 65ch;
    margin: 0.75rem 0 0;
    color: var(--text-tertiary);
    font-size: var(--role-meta-size);
    line-height: 1.5;
  }

  .bose-metrics,
  .bose-flow,
  .bose-architecture,
  .bose-system-parts,
  .bose-media-grid {
    display: grid;
    width: 100%;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .bose-metrics > div,
  .bose-flow > div,
  .bose-architecture-panel,
  .bose-system-parts > div,
  .bose-image-placeholder {
    border: 1px solid var(--border-subtle);
    border-radius: 0.875rem;
    background: var(--surface-raised);
    padding: 1.25rem;
  }

  .bose-metrics p,
  .bose-flow p,
  .bose-system-parts p,
  .bose-image-placeholder p {
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
  .bose-image-placeholder span {
    color: var(--text-tertiary);
    font-size: var(--role-meta-size);
    line-height: 1.4;
  }

  .bose-flow > div {
    position: relative;
  }

  .bose-flow strong,
  .bose-system-parts strong,
  .bose-image-placeholder strong {
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

  .bose-image-placeholder {
    display: grid;
    min-height: 12rem;
    place-content: center;
    border-style: dashed;
    text-align: center;
  }

  .bose-image-placeholder span {
    display: block;
    margin-top: 0.5rem;
    overflow-wrap: anywhere;
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
    .bose-metrics {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .bose-flow {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .bose-architecture,
    .bose-media-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .bose-system-parts {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>

> ###### [Abridged for confidentiality]

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

The immediate failures were only one symptom. The overloaded Figma library mixed current components, legacy assets, explorations, and unmerged work. Memory warnings, component detachment, inconsistent naming, and unclear contribution paths made the dependable source difficult to identify.

<div class="bose-media-grid" aria-label="Placeholders for monolithic-library evidence">
  <div class="bose-image-placeholder"><p><strong>Monolithic evidence · memory warning</strong><span>Replace with: /images/case/bose/bose-monolith-memory-warning.webp</span></p></div>
  <div class="bose-image-placeholder"><p><strong>Monolithic evidence · detached component</strong><span>Replace with: /images/case/bose/bose-monolith-detached-component.webp</span></p></div>
</div>

<!-- When the exports are added, replace the two placeholder divs above with images using the same filenames. -->

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

#### One example: consolidating global navigation behavior

A variable-driven navigation model replaced repeated values and variant-heavy maintenance with one controlled source for desktop and mobile contexts. The following placeholders are ready for the exported Initiative 4 screens.

<div class="bose-media-grid" aria-label="Placeholders for global navigation modernization exports">
  <div class="bose-image-placeholder"><p><strong>Global navigation · before</strong><span>Replace with: /images/case/bose/bose-global-nav-before.webp</span></p></div>
  <div class="bose-image-placeholder"><p><strong>Global navigation · variables model</strong><span>Replace with: /images/case/bose/bose-global-nav-variables.webp</span></p></div>
  <div class="bose-image-placeholder"><p><strong>Global navigation · desktop result</strong><span>Replace with: /images/case/bose/bose-global-nav-desktop.webp</span></p></div>
  <div class="bose-image-placeholder"><p><strong>Global navigation · mobile result</strong><span>Optional fourth export: /images/case/bose/bose-global-nav-mobile.webp</span></p></div>
</div>

<!-- Replace the placeholder divs above with the three or four exported Initiative 4 images. If only three exports are used, remove the optional mobile placeholder. -->

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
