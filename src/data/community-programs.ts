export type CommunityProgramCategory = 'community-programming' | 'teaching' | 'talk';

export type CommunityProgram = {
	id: string;
	title: string;
	category: CommunityProgramCategory;
	categoryLabel: string;
	role: string;
	organization?: string;
	date: string;
	year: number;
	location?: string;
	summary: string;
	shortSummary: string;
	mediaLabel: string;
	imageSrc?: string;
	imageAlt?: string;
	href?: string;
	featured?: boolean;
	homepageSupport?: boolean;
	about?: boolean;
};

export const communityPrograms: CommunityProgram[] = [
	{
		id: 'queer-tech-stories',
		title: 'Queer Tech Stories Across Generations',
		category: 'community-programming',
		categoryLabel: 'Community programming',
		role: 'Co-producer',
		organization: 'Out in Tech × The Generations Project',
		date: '2025–2026',
		year: 2026,
		location: 'PayPal, Spotify, and City Tech · New York',
		summary:
			'I co-produce an intergenerational storytelling series that brings queer technologists together to share the experiences, decisions, and turning points that shaped their lives and careers.',
		shortSummary: 'A recurring storytelling series across three New York programs.',
		mediaLabel: 'Event photography forthcoming',
		featured: true,
		about: true,
	},
	{
		id: 'aerial-teaching',
		title: 'Aerial acrobatics teaching and choreography',
		category: 'teaching',
		categoryLabel: 'Teaching and choreography',
		role: 'Instructor and choreographer',
		organization: 'Crunch Fitness',
		date: '2025–2026',
		year: 2026,
		location: 'New York',
		summary:
			'I teach mixed-level aerial acrobatics, choreograph group pieces, and guide students from first rehearsal through live performance.',
		shortSummary: 'Developing people from first rehearsal through live performance.',
		mediaLabel: 'Teaching and showcase photography forthcoming',
		homepageSupport: true,
		about: true,
	},
	{
		id: 'designing-belonging',
		title: 'Designing Belonging',
		category: 'talk',
		categoryLabel: 'Talk and teaching session',
		role: 'Speaker and educator',
		organization: 'Out in Tech U',
		date: 'July 2026',
		year: 2026,
		summary:
			'A participatory learning session connecting design, community organizing, and the conditions that help people enter, contribute, and feel recognized.',
		shortSummary: 'Designing participation, not just attendance.',
		mediaLabel: 'Workshop photography forthcoming',
		homepageSupport: true,
		about: true,
	},
	{
		id: 'whats-the-bubble-tea',
		title: 'What’s the Bubble Tea?? Part 4',
		category: 'talk',
		categoryLabel: 'Storytelling and creative production',
		role: 'Storyteller and show closer',
		organization: 'The Generations Project × Barkada NYC',
		date: 'May 28, 2026',
		year: 2026,
		location: 'House of Yes · New York',
		summary:
			'I closed the fourth annual storytelling show with a reflection on the difference between conditional welcome and being welcomed wholly, supported by original motion graphics, a music video, and immersive stage projection.',
		shortSummary: 'A closing story about welcome without conditions.',
		mediaLabel: 'House of Yes photography and video forthcoming',
		href: 'https://www.instagram.com/p/DYlSR61tmTB/',
		about: true,
	},
	{
		id: 'focus-and-flow',
		title: 'Focus & Flow',
		category: 'community-programming',
		categoryLabel: 'Professional learning',
		role: 'Producer and organizer',
		organization: 'Out in Tech NYC',
		date: 'May 14, 2025',
		year: 2025,
		location: 'Brooklyn Community Pride Center',
		summary:
			'I produced a practical program about focus strategies for neurodivergent queer tech professionals.',
		shortSummary: 'Focus strategies for neurodivergent queer tech professionals.',
		mediaLabel: 'Event artwork and photography forthcoming',
		href: 'https://outintech.com/event/out-in-tech-nyc-%E2%9C%A8-focus-flow-strategies-for-queer-tech-professionals/',
		about: true,
	},
	{
		id: 'mental-health-workshop',
		title: 'Mental Health Awareness Workshop',
		category: 'community-programming',
		categoryLabel: 'Community wellbeing',
		role: 'Producer and organizer',
		organization: 'Out in Tech NYC',
		date: 'May 22, 2024',
		year: 2024,
		location: 'Oscar Health · New York',
		summary: 'I organized a community panel and workshop focused on mental health awareness.',
		shortSummary: 'A community panel and workshop focused on mental health awareness.',
		mediaLabel: 'Event artwork and photography forthcoming',
		href: 'https://outintech.com/event/out-in-tech-ny-mental-health-awareness-workshop/',
		about: true,
	},
];

export const homepageCommunityPrograms = communityPrograms.filter(
	(program) => program.featured || program.homepageSupport,
);

export const aboutCommunityPrograms = communityPrograms
	.filter((program) => program.about)
	.sort((a, b) => b.year - a.year);
