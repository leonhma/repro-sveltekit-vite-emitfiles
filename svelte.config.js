import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import pluginPWA from 'vite-plugin-webmanifest';
import Inspect from 'vite-plugin-inspect'
  
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self', 'unsafe-inline'],
				'base-uri': ['none'],
				'child-src': ['self'],
				'connect-src': ['self'],
				'form-action': ['self'],
				'img-src': ['self'],
				'media-src': ['self'],
				'object-src': ['none'],
				// report-uri
				'upgrade-insecure-requests': true,
				'worker-src': ['self']
			}
		}
  },
  vite: {
    plugins: [Inspect(), pluginPWA({
      image: {
        src: './static/favicon.png'
      }
    })]
  }
};

export default config;
