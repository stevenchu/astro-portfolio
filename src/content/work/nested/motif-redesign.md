---
title: Cutting marketing page production from 5.5 weeks to three hours—recovering $200K in annual capacity
publishDate: 2021-09-04 00:00:00
img: /images/case/cover-design_language_system-print_photo_memories.png
img_alt: Motif photo-printing brand and responsive marketing experience.
description: |
  Motif Photos served customers across 32 countries, but its marketing pages were still produced one at a time. I led the brand and marketing experience redesign and introduced reusable content architecture that turned a recurring cross-team production cost into a modular publishing system.
tags:
  - Content Systems
  - Responsive Web Design
  - Growth
role:
  - Design Lead
  - Brand & Marketing Experience
  - Design Systems
  - UX Research
platforms: Responsive web, iOS, macOS, Contentful CMS
result: |
  Reduced page production by 98.7% and recovered an estimated $200K in annual cross-team capacity.
year: "2021"
eyebrow: MOTIF PHOTOS · BRAND, GROWTH & CONTENT SYSTEMS · 2019–2023
showcaseArgument: Motif’s customer-acquisition experience spanned its marketing website, email communications, and brand touchpoints across 32 countries. New web pages depended on a one-off production process across design, content, engineering, QA, and an external development partner, limiting how quickly the team could respond to campaigns and customer needs. I led the brand and marketing experience redesign and introduced a reusable component and content architecture that reduced page production to roughly three hours and recovered an estimated $200K in annual cross-team capacity.
homepageOrder: 5
ctaLabel: View project
---

<style>
  .motif-workflow,
  .motif-interventions,
  .motif-metrics {
    display: grid;
    gap: 1rem;
    margin: 2rem 0;
  }

  .motif-workflow-panel,
  .motif-intervention {
    border: 1px solid var(--border-subtle);
    border-radius: 1rem;
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  .motif-workflow-panel--after,
  .motif-intervention {
    background: var(--surface-raised);
  }

  .motif-workflow-kicker,
  .motif-metric-label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  .motif-workflow-panel h4,
  .motif-intervention h4 {
    margin: 0;
  }

  .motif-workflow-steps {
    counter-reset: workflow-step;
    list-style: none;
    margin: 1.5rem 0 0;
    padding: 0;
  }

  .motif-workflow-steps li {
    counter-increment: workflow-step;
    display: grid;
    grid-template-columns: 2rem minmax(0, 1fr);
    gap: 0.75rem;
    align-items: start;
    padding: 0.9rem 0;
    border-top: 1px solid var(--border-subtle);
  }

  .motif-workflow-steps li::before {
    content: counter(workflow-step, decimal-leading-zero);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 1.6;
  }

  .motif-workflow-time {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: baseline;
    margin-top: 0.75rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-subtle);
  }

  .motif-workflow-time strong {
    font-size: clamp(1.35rem, 3vw, 2rem);
    line-height: 1;
  }

  .motif-intervention p {
    margin-bottom: 0;
  }

  .motif-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .motif-metric {
    padding: 1rem 0;
    border-top: 1px solid var(--border-subtle);
  }

  .motif-metric strong {
    display: block;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    line-height: 1.05;
  }

  .motif-homepage-crop {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: 1rem;
    background: var(--surface-raised);
  }

  .motif-homepage-crop img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: cover;
    object-position: right center;
  }

  .motif-case-visual {
    margin: 2rem 0;
  }

  .motif-case-visual figcaption {
    margin-top: 0.75rem;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (min-width: 50em) {
    .motif-workflow {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .motif-interventions {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .motif-metrics {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
</style>

###### THE OPERATING PROBLEM
#### A global marketing team was still producing pages one at a time

Motif’s customer-acquisition experience served 32 countries, but the publishing model did not scale with it. New pages typically began by duplicating an earlier page and editing it for the next campaign instead of being assembled from modular, reusable sections. Any new layout or behavior then moved through design, content, an external development partner, and repeated responsive QA.

The constraint was not a shortage of campaign ideas. The system made every page expensive to change—even when much of the structure already existed.

<div class="motif-workflow" aria-label="Before and after marketing page production workflow">
  <section class="motif-workflow-panel">
    <span class="motif-workflow-kicker">Before · one-off production</span>
    <h4>Duplicate, customize, hand off</h4>
    <ol class="motif-workflow-steps">
      <li>Duplicate a previous page</li>
      <li>Rewrite content and reshape the layout</li>
      <li>Send custom changes to external development</li>
      <li>Review the implementation across devices</li>
      <li>Repeat QA and fixes before launch</li>
    </ol>
    <div class="motif-workflow-time"><span>Typical page</span><strong>5.5 weeks</strong></div>
  </section>

  <section class="motif-workflow-panel motif-workflow-panel--after">
    <span class="motif-workflow-kicker">After · modular publishing</span>
    <h4>Assemble, localize, publish</h4>
    <ol class="motif-workflow-steps">
      <li>Select reusable page sections</li>
      <li>Enter campaign and localized content</li>
      <li>Preview shared responsive patterns</li>
      <li>Publish from a validated foundation</li>
    </ol>
    <div class="motif-workflow-time"><span>Typical page</span><strong>≈3 hours</strong></div>
  </section>
</div>

###### THE INTERVENTION
#### I moved the work from page production to system configuration

I led the brand and marketing experience redesign, then helped define the content model and reusable UI patterns for a decoupled Contentful and static-site architecture. The important shift was not simply creating a component library. It was changing what each team had to do for every launch.

<div class="motif-interventions">
  <section class="motif-intervention">
    <span class="motif-workflow-kicker">01 · Structure</span>
    <h4>Modular content architecture</h4>
    <p>Reusable sections carried known responsive behavior instead of requiring teams to duplicate complete pages.</p>
  </section>

  <section class="motif-intervention">
    <span class="motif-workflow-kicker">02 · Authoring</span>
    <h4>Shared publishing workflow</h4>
    <p>Content editors could assemble and localize campaigns without initiating another bespoke engineering project.</p>
  </section>

  <section class="motif-intervention">
    <span class="motif-workflow-kicker">03 · Governance</span>
    <h4>Reusable design and code</h4>
    <p>Shared patterns kept behavior consistent while preserving enough flexibility for campaign and market needs.</p>
  </section>
</div>

<!-- TODO(asset): Optional localization evidence belongs here. Search the source archive for a legible, disclosure-safe Contentful screenshot showing locale or market authoring. Keep this section absent until the evidence is found. -->

###### THE CUSTOMER EXPERIENCE
#### Modularity supported a clearer brand experience—not a generic one

The responsive homepage used shared structures to make product value, pricing, trust signals, product range, and next steps easier to scan across breakpoints. The system created consistency underneath the experience while still leaving room for campaign storytelling and visual expression.

<figure class="motif-case-visual">
  <div class="motif-homepage-crop">
    <img src="/images/case/motif16.jpg" alt="Responsive Motif homepage redesign shown across phone, tablet, and desktop, emphasizing product value, trust signals, product range, and next steps.">
  </div>
  <figcaption>Selected portion of the final homepage presentation: the responsive after-state across phone, tablet, and desktop.</figcaption>
</figure>

###### THE RESULT
#### Production stopped scaling linearly with every campaign

A page that had taken 5.5 weeks through external development could be produced in roughly three hours in the new workflow—a 98.7% reduction. Across the recurring work of design, content, engineering, QA, and vendor coordination, that recovered an estimated $200K in annual cross-team capacity.

<div class="motif-metrics" aria-label="Motif project results">
  <div class="motif-metric">
    <span class="motif-metric-label">Production time</span>
    <strong>5.5 weeks → ≈3 hours</strong>
  </div>
  <div class="motif-metric">
    <span class="motif-metric-label">Faster production</span>
    <strong>98.7%</strong>
  </div>
  <div class="motif-metric">
    <span class="motif-metric-label">Annual capacity</span>
    <strong>≈$200K</strong>
  </div>
  <div class="motif-metric">
    <span class="motif-metric-label">Global reach</span>
    <strong>32 countries</strong>
  </div>
</div>

The broader redesign also increased organic downloads by 55% among 25–34-year-olds, showing that the operational gains did not require sacrificing acquisition performance or customer-facing quality.

<!-- TODO(evidence): The current exported slide deck does not contain the source for the +12% CTR result from the top-right “Download Motif” navigation test. Add a focused visual or supporting caption here only after the original test evidence is located and verified. -->

> Takeaway: The highest-leverage design decision was not another campaign concept. It was changing the production model behind every campaign.
