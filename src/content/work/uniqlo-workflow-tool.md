---
title: Cutting email production from 40 minutes to 5—and tripling weekly output
publishDate: 2021-03-02 00:00:00
img: /images/case/uniqlo/cover-uniqlo-wide.png
img_alt: Composite showing the guided UNIQLO email-production system and a segmented email output.
description: |
  Two designers were manually coding a daily national email and had no capacity to develop personalized content. In a two-week engagement, I redesigned their production workflow and built an editor-native system of reusable, guarded email modules—without adding budget or interrupting scheduled launches.
tags:
  - Service Design
  - UX Engineering
role:
  - Service Design
  - Workflow Research
  - Front-end Implementation
platforms: Internal email production system
result: |
  40 → 5 minutes per build · 7 → 21 emails per week · 2-week rollout
year: "2018"
eyebrow: UNIQLO · INTERNAL WORKFLOW · 2018
showcaseArgument: UNIQLO wanted to create more personalized email content, but two designers were already at capacity manually coding a daily national send. I redesigned their production workflow and built a reusable coding system that reduced each email build from 40 minutes to 5. The team increased output from 7 to 21 emails per week without added budget or interrupting its regular launch calendar.
homepageOrder: 6
ctaLabel: View project
---

<style>
  main p {
    max-width: 65ch;
  }

  .case-visual {
    width: 100%;
    margin: 2rem 0 0;
  }

  .case-visual img {
    display: block;
    width: 100%;
    height: auto;
    /*border: 1px solid var(--border-subtle);*/
    border-radius: 1rem;
    background: var(--surface-raised);
  }

  .case-visual figcaption {
    max-width: 65ch;
    margin: 0.75rem 0 0;
    color: var(--text-tertiary);
    font-size: var(--role-meta-size);
    line-height: 1.5;
  }

  .two-col-fixed,
  .two-col,
  .system-parts,
  .metric-strip {
    display: grid;
    width: 100%;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .system-parts > div,
  .metric-strip > div {
    border: 1px solid var(--border-subtle);
    border-radius: 0.875rem;
    background: var(--surface-raised);
    padding: 1.25rem;
  }

  .system-parts p,
  .metric-strip p {
    margin: 0 !important;
  }

  .system-parts strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  .two-col-fixed,
  .metric-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .metric-strip strong {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
    font-size: clamp(1.35rem, 4vw, 2rem);
    line-height: 1.1;
  }

  .metric-strip span {
    color: var(--text-tertiary);
    font-size: var(--role-meta-size);
    line-height: 1.4;
  }

  @media (min-width: 50em) {
    .two-col {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .two-col-fixed figcaption,
    .two-col figcaption {
      grid-column: span 2;
    }

    .system-parts {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .metric-strip {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
</style>

###### THE BOTTLENECK

#### A personalization strategy was blocked by a fragile production workflow

UNIQLO wanted to create more relevant email content, but two designers were already at capacity producing and manually coding one national send each day. The inherited codebase was unreliable: a routine build took about 40 minutes, while troubleshooting could stretch the work to several hours. The team had neither the production capacity nor the dependable mechanism needed to segment campaigns by audience, region, or context. Designing more campaign concepts would not solve the constraint upstream.

<figure class="case-visual">
  <img src="/images/case/uniqlo/uniqlo-personalization-regions.png" style="max-width:500px;margin:0;" alt="Visual comparing one national UNIQLO email against different regional weather contexts in Portland, San Francisco, and Miami.">
  <figcaption>Regional mismatch: one national campaign shown against different local contexts.</figcaption>
</figure>

###### THE DIAGNOSIS

#### The highest-leverage intervention was removing technical work from the designers

I spent a day observing the existing production process and mapping each step required to move from design to launch. Repetitive editing, code interpretation, and QA created most of the uncertainty. The intervention therefore had to do more than accelerate typing: it needed to remove existing defects, prevent designers from introducing new ones, and shorten the path to a validated build. Given the two-week timeline and $0 added budget, embedding a maintainable system in the team’s existing editor was more practical than creating a standalone application.

<figure class="case-visual two-col">
  <img src="/images/case/uniqlo/uniqlo-workflow-before.png" alt="Before-and-after workflow comparing a manual, uncertain email build with a guided, repeatable process."><img src="/images/case/uniqlo/uniqlo-workflow-after.png" alt="Before-and-after workflow comparing a manual, uncertain email build with a guided, repeatable process.">
  <figcaption>Before and after workflow, including the 40-minute versus 5-minute contrast.</figcaption>
</figure>

###### THE SYSTEM

#### Reusable blocks and guided fields made the safe path the fastest path

I rebuilt the workflow as three coordinated parts.

<div class="system-parts">
  <div>
    <p><strong>Standardized foundation</strong>I sanitized and modularized the inherited master code so every email began from a dependable source.</p>
  </div>
  <div>
    <p><strong>Reusable block library</strong>Designers inserted approved modules through memorable shortcuts instead of locating, copying, and modifying old code.</p>
  </div>
  <div>
    <p><strong>Guided content fields</strong>Each module prompted only for values such as image URL, dimensions, and alt text, while the system protected structural code and repeated shared values automatically.</p>
  </div>
</div>

<figure class="case-visual two-col">
  <img src="/images/case/uniqlo/uniqlo-guided-template.png" alt="Guided template showing content prompts and protected structural email code."><img src="/images/case/uniqlo/uniqlo-guided-template.gif" alt="Guided template showing content prompts and protected structural email code.">
  <figcaption>System behavior: designers enter content values while the workflow handles structural code and repeated fields.</figcaption>
</figure>

I tested the system against the active build queue, piloted it with the designers, added requested campaign variants, and created a video walkthrough and shortcut guide so the team could operate it independently.

###### THE OUTCOME

#### Build time fell 87.5%, giving the team capacity to triple weekly output

<div class="metric-strip" aria-label="UNIQLO project outcomes">
  <div><strong>40 → 5 min</strong><span>Build time</span></div>
  <div><strong>7 → 21</strong><span>Emails per week</span></div>
  <div><strong>2 weeks</strong><span>Production rollout</span></div>
  <div><strong>$0</strong><span>Added business spend</span></div>
</div>

During the pilot, average build time fell from approximately 40 minutes to five. The team increased weekly output from 7 to 21 emails while the new workflow was implemented alongside the normal launch calendar, with no added business spend.

That capacity enabled geo-based product recommendations, live polls, gender-segmented creative, closer alignment with the social team, and more product education. These were content capabilities enabled by the workflow; the project did not measure downstream subscriber or revenue impact.

<figure class="case-visual two-col-fixed">
  <img src="/images/case/uniqlo/uniqlo-segmentation-enabled-men.png" alt="Paired UNIQLO email examples showing differentiated customer-facing content enabled by the new workflow."><img src="/images/case/uniqlo/uniqlo-segmentation-enabled-women.png" alt="Paired UNIQLO email examples showing differentiated customer-facing content enabled by the new workflow.">
  <figcaption>Customer-facing result: paired examples of segmented or context-specific email content.</figcaption>
</figure>

Takeaway: Customer experience can be constrained by invisible internal systems. Improving the production workflow created more leverage than designing additional campaign concepts would have.
