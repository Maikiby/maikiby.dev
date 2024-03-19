import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { neoFlutter } from './neo-flutter';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},

	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [neoFlutter],
				preset: [
					{
						name: 'modern',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;

export default config;
