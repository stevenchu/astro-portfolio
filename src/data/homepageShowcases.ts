export type HomepageShowcase = {
	projectTitle: string;
	eyebrow: string;
	projectContext: string;
	image: string;
	imageAlt: string;
	href?: string;
	ctaLabel?: string;
	external?: boolean;
	detailNote?: string;
};

export const homepageShowcases: HomepageShowcase[] = [
	{
		projectTitle: 'BodyMap',
		eyebrow: 'INDEPENDENT PRODUCT · 2026',
		projectContext:
			'Movement teachers often rely on spoken corrections that students struggle to retain after class. I designed and independently built BodyMap to turn student videos into clear, visual coaching feedback that instructors can annotate, review, and share. The working beta launched in three weeks.',
		image: '/images/stock-3.jpg',
		imageAlt:
			'Abstract gradient artwork used as a temporary placeholder for the BodyMap product experience.',
		href: 'https://bodymapcoach.vercel.app',
		ctaLabel: 'Try BodyMap',
		external: true,
	},
	{
		projectTitle: 'Financial-services platform',
		eyebrow: 'FINANCIAL SERVICES · DESIGN SYSTEMS',
		projectContext:
			'A shared banking platform needed to reflect the identities of independent banks and credit unions without fragmenting into separate products. I architected institution-level theming logic that could translate each institution’s palette into accessible semantic roles while preserving one shared product foundation.',
		image: '/images/stock-4.jpg',
		imageAlt: 'Abstract blue and pink artwork representing a configurable visual system.',
		detailNote: 'Details available in interview.',
	},
	{
		projectTitle: 'Bose Design System',
		eyebrow: 'BOSE · DESIGN SYSTEMS',
		projectContext:
			'Bose teams were designing and shipping across a growing ecosystem of commerce experiences without a sufficiently shared product foundation. I owned the design system and developed the foundations, components, and patterns that helped design, content, and engineering teams work from a more consistent model.',
		image: '/images/case/bose/cover-bose-design-system-strike2.png',
		imageAlt: 'A visual overview of the Bose design-system foundation.',
		href: '/work/bose-design-system',
		ctaLabel: 'View project',
	},
	{
		projectTitle: 'Alpaca VC General Meeting',
		eyebrow: 'ALPACA VC · BRANDED ENVIRONMENT',
		projectContext:
			'Alpaca VC brought founders, investors, and partners together for its 2025 General Meeting and needed the space to feel like a coherent expression of the firm rather than a collection of event graphics. I translated the brand into a spatial system across the stage, signage, lounges, murals, and storytelling moments, creating an environment that guided guests through the event while giving the gathering a distinctive visual identity.',
		image: '/images/stock-1.jpg',
		imageAlt: 'Temporary placeholder for the Alpaca VC General Meeting branded environment.',
	},
	{
		projectTitle: 'Motif Photos',
		eyebrow: 'MOTIF · PRODUCT, BRAND & SYSTEMS',
		projectContext:
			'As R.R. Donnelley moved from B2B printing into direct-to-consumer photo products, Motif needed a brand and digital system that could support a growing global experience across its app, web, and marketing channels. I led the redesign and built shared design and content systems that brought those touchpoints into a more consistent model. By introducing component-based content architecture, I reduced web production time by 98.7% and saved approximately $200K annually.',
		image: '/images/case/cover-design_language_system-print_photo_memories.png',
		imageAlt: 'Motif photo-printing product and design-system work.',
		href: '/work/nested/motif-redesign',
		ctaLabel: 'View project',
	},
	{
		projectTitle: 'UNIQLO Email Workflow',
		eyebrow: 'UNIQLO · SERVICE DESIGN & UX ENGINEERING',
		projectContext:
			'UNIQLO wanted to create more personalized email content, but two designers were already at capacity manually coding a daily national send. I redesigned their production workflow and built a reusable coding system that reduced email build time from 40 minutes to 5 minutes. The team tripled weekly output without added budget or interrupting its regular launch calendar.',
		image: '/images/case/cover-uniqlo-wide.png',
		imageAlt: 'Internal email code-generation workflow created for UNIQLO designers.',
		href: '/work/uniqlo-workflow-tool',
		ctaLabel: 'View project',
	},
	{
		projectTitle: 'Marie Forleo',
		eyebrow: 'MARIE FORLEO · UX STRATEGY & INFORMATION ARCHITECTURE',
		projectContext:
			'Marie Forleo’s audience often arrived through isolated blog posts or videos, but the site did not yet guide aspiring entrepreneurs from inspiration toward the confidence and readiness to enroll in B-School. I restructured the content ecosystem and designed pathways across MarieTV, editorial content, and course experiences that supported discovery, trust, and action. The resulting architecture tripled entry points to MarieTV and continues to support the platform’s growth more than a decade later.',
		image: '/images/case/cover-marie_forleo.jpg',
		imageAlt: 'Responsive content and learning experience designed for Marie Forleo.',
		href: '/work/marie-forleo',
		ctaLabel: 'View project',
	},
];
