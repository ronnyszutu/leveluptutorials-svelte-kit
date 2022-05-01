import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */

import sveltePreprocess from 'svelte-preprocess';
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: sveltePreprocess()
};

export default config;
