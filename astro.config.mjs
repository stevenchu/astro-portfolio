import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
	site: isGitHubPages ? 'https://stevenchu.github.io' : undefined,
	base: isGitHubPages ? '/astro-portfolio/' : '/',
});
