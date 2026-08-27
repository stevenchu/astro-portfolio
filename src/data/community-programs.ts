// Canonical local source for community programming, teaching, and talks.
// Page components select and present these records; they should not duplicate event copy inline.

export type CommunityProgramCategory = 'community-programming' | 'teaching' | 'talk';

export type CommunityProgramStatus = 'past' | 'current' | 'upcoming';

export type CommunityProgramOccurrence = {
	label: string;
	date?: string;
	location?: string;
	venue?: string;
	notes?: string;
};

export type CommunityProgramSource = {
	label: string;
	href: string;
};

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
	status?: CommunityProgramStatus;
	summary: string;
	shortSummary: string;
	mediaLabel: string;
	imageSrc?: string;
	imageAlt?: string;
	secondaryImageSrc?: string;
	secondaryImageAlt?: string;
	homepageLabel?: string;
	homepageTitle?: string;
	homepageSubtitle?: string;
	homepageSummary?: string;
	homepageHighlights?: string[];
	href?: string;
	sources?: CommunityProgramSource[];
	occurrences?: CommunityProgramOccurrence[];
	contributions?: string[];
	evidenceNotes?: string[];
	featured?: boolean;
	homepageSupport?: boolean;
	about?: boolean;
};

export const communitySectionContent = {
	eyebrow: 'Community · Teaching · Talks',
	title: 'Community programming, teaching, and talks.',
	homepageTitle: 'I create spaces where people can learn, contribute, and be seen.',
	featuredLede: 'Product design is one way I do that. I also produce community programs, teach movement, and facilitate conversations about belonging.',
	timelineLede: 'A sustained practice of creating ways for people to learn, participate, perform, and share their stories.',
} as const;

export const communityPrograms: CommunityProgram[] = [
	{
		id: 'queer-tech-stories',
		title: 'Queer Tech Stories Across Generations',
		category: 'community-programming',
		categoryLabel: 'Out in Tech NY × The Generations Project',
		role: 'Co-producer',
		organization: 'Out in Tech NY × The Generations Project',
		date: '2025–2026',
		year: 2026,
		location: 'New York',
		status: 'current',
		summary:
			'I co-produce an intergenerational storytelling series that brings queer technologists together to share the experiences, decisions, and turning points that shaped their lives and careers.',
		shortSummary: 'A recurring storytelling series across three New York programs.',
		mediaLabel: 'PayPal, Spotify, and Leadership Institute event photography',
		imageSrc: 'images/community/queer-tech-stories.jpg',
		imageAlt: 'A speaker presents at Queer Tech Stories Across Generations with the audience softly blurred in the foreground.',
		secondaryImageSrc: 'images/community/queer-tech-steven.jpg',
		secondaryImageAlt: 'Steven Chu speaks into a microphone at Queer Tech Stories Across Generations.',
		homepageLabel: 'Community building · Co-producer',
		homepageHighlights: ['PayPal · 2025', 'Spotify · 2026', 'Out in Tech Leadership Institute · 2026'],
		occurrences: [
			{
				label: 'PayPal edition',
				date: 'November 6, 2025',
				venue: 'PayPal',
				location: 'New York',
				notes: 'Six queer technologists shared intergenerational stories.',
			},
			{
				label: 'Spotify edition',
				date: 'April 16, 2026',
				venue: 'Spotify',
				location: 'New York',
				notes: 'Six storytellers; co-produced with Kan Seidel and MJ Yap.',
			},
			{
				label: 'Out in Tech Leadership Institute edition',
				date: 'Fall 2026',
				venue: 'City Tech',
				location: 'New York',
				notes: 'Upcoming conference edition.',
			},
		],
		evidenceNotes: [
			'Press and event photography is available for the series.',
			'Confirm final conference billing and collaborator credits before publication.',
		],
		featured: true,
		about: true,
	},
	{
		id: 'aerial-teaching',
		title: 'Teaching through movement',
		category: 'teaching',
		categoryLabel: 'Crunch Fitness',
		role: 'Instructor',
		organization: 'Crunch Fitness',
		date: '2025–2026',
		year: 2026,
		location: 'New York',
		status: 'current',
		summary:
			'I teach mixed-level aerial acrobatics, adapting instruction to different bodies, confidence levels, and learning styles. I also choreograph group pieces that students learn, rehearse, and perform in showcases.',
		shortSummary: 'I teach mixed-level aerial acrobatics, breaking complex movements into progressive, actionable guidance.',
		homepageTitle: 'Teaching through movement',
		homepageSummary: 'I teach mixed-level aerial acrobatics, breaking complex movements into progressive, actionable guidance.',
		imageSrc: 'images/community/teaching-aerial-acrobatics.jpg',
		imageAlt: 'Steven Chu demonstrates an aerial movement beside a pole in a dance studio.',
		mediaLabel: 'Crunch teaching and performance showcase photography',
		contributions: [
			'Teach X-Pole Choreo at Crunch Chelsea.',
			'XPert Pole Levels 1 and 2 certified.',
			'Choreographed, trained students, rehearsed, and performed Ella Mai — “Shot Clock” for the Fall 2025 showcase.',
			'Choreographed, trained students, rehearsed, and performed Elisa — “Dancing” for the Fall 2025 showcase.',
			'Choreographed and trained students who performed Britton & The Sting — “Many Chances” for the Spring 2026 showcase.',
		],
		occurrences: [
			{
				label: 'Crunch performance showcase — Fall 2025',
				date: 'Fall 2025',
				notes: 'Two group performances: “Shot Clock” and “Dancing.”',
			},
			{
				label: 'Crunch performance showcase — Spring 2026',
				date: 'Spring 2026',
				notes: 'Student performance of “Many Chances.”',
			},
		],
		evidenceNotes: [
			'Group, instructional, rehearsal, and performance photography and video are available.',
			'Confirm exact showcase titles, dates, venues, student counts, and rehearsal duration before publication.',
		],
		homepageSupport: true,
		about: true,
	},
	{
		id: 'designing-belonging',
		title: 'Designing belonging',
		category: 'talk',
		categoryLabel: 'Out in Tech U: Launch Lab',
		role: 'Facilitator and panelist',
		organization: 'Out in Tech U: Launch Lab',
		date: 'July 2026',
		year: 2026,
		status: 'past',
		summary:
			'I led a session for students learning how to create their own community-building events, focused on designing the welcome experience and creating a sense of belonging. I later joined a panel of industry professionals to review their final event pitches.',
		shortSummary: 'A session on designing the welcome experience for student-led community events.',
		homepageTitle: 'How I built it: Designing belonging',
		homepageSubtitle: 'Out in Tech U: Launch Lab · 2026',
		homepageSummary: 'A participatory session about creating conditions for people to enter, contribute, and feel recognized.',
		imageSrc: 'images/community/talk.jpg',
		imageAlt: 'Out in Tech U Launch Lab Pilot graphic with student group photos and illustrated workshop elements.',
		mediaLabel: 'Workshop photography, slides, or recording',
		evidenceNotes: [
			'Confirm the exact official title, date, platform or venue, audience, collaborators, and attendance.',
			'Add slides, photographs, recording, or attendee feedback when selected.',
		],
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
		location: 'House of Yes, Main Room · New York',
		status: 'past',
		summary:
			'I closed the fourth annual storytelling show with a reflection on the difference between “welcome, if…” and being welcomed wholly. I also created motion graphics, a music video, and immersive stage projection mapping for the event.',
		shortSummary: 'A closing story about welcome without conditions.',
		mediaLabel: 'House of Yes photography, video, motion graphics, and stage projection',
		href: 'https://www.instagram.com/p/DYlSR61tmTB/',
		sources: [{ label: 'Instagram event post', href: 'https://www.instagram.com/p/DYlSR61tmTB/' }],
		contributions: [
			'Official performer credit: storyteller.',
			'Described by Kan from The Generations Project as “the show closer.”',
			'Created event graphics with the Out in Tech project team.',
			'Independently created motion graphics and a music video.',
			'Created immersive stage projection mapping that wrapped the performance environment.',
		],
		evidenceNotes: [
			'Photos and video are available.',
			'Add the full script, source media, stage documentation, credits, and usage rights.',
			'The reason for the invitation remains undocumented and should not be inferred.',
		],
		about: false,
	},
	{
		id: 'focus-and-flow',
		title: 'Focus & Flow Strategies',
		category: 'community-programming',
		categoryLabel: 'Out in Tech NY',
		role: 'Producer',
		organization: 'Out in Tech NY',
		date: 'May 2025',
		year: 2025,
		location: 'Brooklyn Community Pride Center · Crown Heights, Brooklyn',
		status: 'past',
		summary:
			'I brought together four mental health professionals for a panel on focus strategies for neurodivergent professionals.',
		shortSummary: 'A panel on focus strategies for neurodivergent professionals.',
		mediaLabel: 'Official event artwork and event photography',
		href: 'https://outintech.com/event/out-in-tech-nyc-%E2%9C%A8-focus-flow-strategies-for-queer-tech-professionals/',
		sources: [
			{
				label: 'Out in Tech event page',
				href: 'https://outintech.com/event/out-in-tech-nyc-%E2%9C%A8-focus-flow-strategies-for-queer-tech-professionals/',
			},
			{
				label: 'Eventbrite registration',
				href: 'https://www.eventbrite.com/e/out-in-tech-nyc-focus-flow-strategies-for-queer-tech-professionals-tickets-1351141353159',
			},
			{
				label: 'Eventbrite hero image source',
				href: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1023929493%2F69969265195%2F1%2Foriginal.20250506-002125?auto=format%2Ccompress&q=75&sharp=10&s=f4c226325e1f2ae0a19155c841db57e9',
			},
		],
		about: true,
	},
	{
		id: 'madam-brett-acroyoga',
		title: 'Madam Brett Falls Acroyoga Day Trip and Photoshoot',
		category: 'community-programming',
		categoryLabel: 'Community excursion',
		role: 'Co-producer',
		date: 'August 1, 2026',
		year: 2026,
		location: 'Madam Brett Park and Dennings Point · Beacon, New York',
		status: 'upcoming',
		summary:
			'I am co-producing a full-day acroyoga excursion from New York City to Beacon combining a group walk, waterfalls, shallow-water recreation, shared picnic time, movement, photography, and a Hudson River sunset gathering.',
		shortSummary: 'A movement, nature, photography, and community day trip.',
		mediaLabel: 'Event guide imagery; participant photography expected after the excursion',
		href: 'https://www.eventbrite.com/e/madam-brett-falls-acroyoga-day-tripphotoshoot-tickets-1991840083308?aff=erelpanelorg',
		sources: [
			{
				label: 'Official registration',
				href: 'https://www.eventbrite.com/e/madam-brett-falls-acroyoga-day-tripphotoshoot-tickets-1991840083308?aff=erelpanelorg',
			},
			{
				label: 'Participant guide and itinerary',
				href: 'https://chuubie.notion.site/Madam-Brett-Waterfall-Hudson-Sunset-Trip-Acroyoga-Aug-1-2026-62d70a456ad14cddba384a5f8951e009',
			},
		],
		contributions: [
			'Participant logistics and preparation.',
			'Community communication and facilitation.',
			'Movement and group photography planning.',
			'Outdoor itinerary spanning Madam Brett Falls and Dennings Point.',
		],
		evidenceNotes: [
			'Record co-producer names, attendance, participant feedback, and resulting photography after the event.',
		],
		about: false,
	},
	{
		id: 'mental-health-workshop',
		title: 'Mental Health Awareness Workshop',
		category: 'community-programming',
		categoryLabel: 'Community wellbeing',
		role: 'Producer and organizer',
		organization: 'Out in Tech NY',
		date: 'May 22, 2024',
		year: 2024,
		location: 'Oscar Health Headquarters · New York',
		status: 'past',
		summary: 'I organized a community panel and workshop focused on mental health awareness.',
		shortSummary: 'A community panel and workshop focused on mental health awareness.',
		mediaLabel: 'Official event artwork and event photography',
		href: 'https://outintech.com/event/out-in-tech-ny-mental-health-awareness-workshop/',
		sources: [
			{
				label: 'Out in Tech event page',
				href: 'https://outintech.com/event/out-in-tech-ny-mental-health-awareness-workshop/',
			},
			{
				label: 'Eventbrite registration',
				href: 'https://www.eventbrite.com/e/out-in-tech-ny-mental-health-awareness-workshop-tickets-899381533377',
			},
			{
				label: 'Eventbrite hero image source',
				href: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F761536569%2F274726954638%2F1%2Foriginal.20240507-133735?auto=format%2Ccompress&q=75&sharp=10&s=ec0b89fc8fe68908b96a390368477082',
			},
		],
		evidenceNotes: ['Confirm the exact public format, panelists, and Steven’s production responsibilities before publication.'],
		about: false,
	},
	{
		id: 'halloween-pet-costume-night',
		title: 'Halloween Pet Costume Night',
		category: 'community-programming',
		categoryLabel: 'Community social',
		role: 'Producer and organizer',
		organization: 'Out in Tech NY',
		date: 'October 2024',
		year: 2024,
		location: 'Brooklyn, New York',
		status: 'past',
		summary:
			'I helped produce a playful, low-pressure social event designed to help queer tech community members connect outside a professional-programming format.',
		shortSummary: 'A low-pressure community social centered on pets and Halloween.',
		mediaLabel: 'Official event artwork and social photography',
		href: 'https://outintech.com/event/out-in-tech-ny-halloween-pet-costume-night/',
		sources: [
			{
				label: 'Out in Tech event page',
				href: 'https://outintech.com/event/out-in-tech-ny-halloween-pet-costume-night/',
			},
			{
				label: 'Eventbrite registration',
				href: 'https://www.eventbrite.com/e/out-in-tech-ny-halloween-pet-costume-night-tickets-1037288175857',
			},
			{
				label: 'Eventbrite hero image source',
				href: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F867158759%2F274726954638%2F1%2Foriginal.20241004-223612?auto=format%2Ccompress&q=75&sharp=10&s=4593d868c13738784879f42a11985248',
			},
		],
		evidenceNotes: ['Confirm the exact event date, venue, collaborators, and Steven’s production responsibilities before publication.'],
		about: false,
	},
	{
		id: 'kayaking-instruction',
		title: 'Kayaking instruction',
		category: 'teaching',
		categoryLabel: 'Outdoor instruction',
		role: 'Kayaking instructor',
		organization: 'HarborLAB',
		date: '2013–2018',
		year: 2018,
		location: 'New York waterways',
		status: 'past',
		summary:
			'I taught introductory kayaking and participant safety through HarborLAB. This earlier work shows that teaching, outdoor facilitation, and creating safe ways into unfamiliar activities have been longstanding parts of my practice.',
		shortSummary: 'Earlier instruction grounded in outdoor facilitation and participant safety.',
		mediaLabel: 'Kayaking instruction photography',
		contributions: ['ACA Level 1 credential.', 'Kayaking instructor from 2013 through 2018.'],
		about: false,
	},
	{
		id: 'black-trans-liberation-kitchen',
		title: 'Black Trans Liberation Kitchen',
		category: 'community-programming',
		categoryLabel: 'Mutual aid',
		role: 'Volunteer',
		date: 'Date to confirm',
		year: 2024,
		status: 'past',
		summary:
			'I volunteered with Black Trans Liberation Kitchen. This should remain a plain record of mutual-aid participation rather than be inflated into a leadership claim.',
		shortSummary: 'Mutual-aid volunteer participation.',
		mediaLabel: 'Public media only if appropriate and consented',
		evidenceNotes: [
			'Confirm dates, responsibilities, organization naming, and whether photographs or identifying details are appropriate for public use.',
		],
	},
	{
		id: 'city-of-water-day',
		title: 'City of Water Day Cardboard Kayak Race',
		category: 'community-programming',
		categoryLabel: 'Civic waterfront participation',
		role: 'Role to confirm',
		date: 'Date to confirm',
		year: 2024,
		location: 'New York',
		summary:
			'A civic waterfront event involving playful making, teamwork, public-space participation, and Steven’s longstanding relationship to New York waterways.',
		shortSummary: 'Civic waterfront participation through playful making and teamwork.',
		mediaLabel: 'Event photography if rights are confirmed',
		evidenceNotes: ['Confirm year, host organizations, exact contribution, and photography rights before publication.'],
	},
];

export const homepageCommunityPrograms = communityPrograms.filter(
	(program) => program.featured || program.homepageSupport,
);

export const aboutCommunityPrograms = communityPrograms
	.filter((program) => program.about)
	.sort((a, b) => b.year - a.year);
