import type { CollectionEntry } from 'astro:content';

const featuredWorkIds = [
	'financial-services-design-systems',
	'bodymap',
	'bose-design-system',
] as const;

export function sortWorkProjects(
	a: CollectionEntry<'work'>,
	b: CollectionEntry<'work'>
) {
	const aFeaturedIndex = featuredWorkIds.indexOf(a.id as (typeof featuredWorkIds)[number]);
	const bFeaturedIndex = featuredWorkIds.indexOf(b.id as (typeof featuredWorkIds)[number]);
	const aIsFeatured = aFeaturedIndex !== -1;
	const bIsFeatured = bFeaturedIndex !== -1;

	if (aIsFeatured && bIsFeatured) return aFeaturedIndex - bFeaturedIndex;
	if (aIsFeatured) return -1;
	if (bIsFeatured) return 1;

	return (b.data.publishDate?.valueOf() ?? 0) - (a.data.publishDate?.valueOf() ?? 0);
}
