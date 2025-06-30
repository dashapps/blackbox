// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';




// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Maugli BlackBox',
			logo: {
				light: './src/assets/maugli_blackbox_light_theme_logo.svg',
				dark: './src/assets/maugli_blackbox_dark_theme_logo.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/darrrina' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dariazorina' }
			],
			sidebar: [
				{
					label: 'Channels',
					autogenerate: { directory: 'channels' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Intro',
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Start',
					autogenerate: { directory: 'start' },
				},
				{
					label: 'Pipeline',
					autogenerate: { directory: 'pipeline' },
				},
				{
					label: 'Wiki',
					autogenerate: { directory: 'wiki' },
				},
				{
					label: 'Outro',
					autogenerate: { directory: 'outro' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/global.css',
				'./src/styles/custom.css',
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
