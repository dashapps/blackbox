// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';




// https://astro.build/config
export default defineConfig({
	site: 'https://blackbox.maugli.cfd',
	integrations: [
		starlight({

			title: 'Maugli BlackBox',
			logo: {
				light: './src/assets/maugli_blackbox_light_theme_logo.svg',
				dark: './src/assets/maugli_blackbox_dark_theme_logo.svg',
				replacesTitle: true,
				link: '/intro/01/',
			},
			social: [
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/darrrina' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dariazorina' }
			],
			sidebar: [
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
					label: 'Channels',
					autogenerate: { directory: 'channels' },
				},
				{
					label: 'Wiki',
					autogenerate: { directory: 'wiki' },
				},
				{
					label: 'Outro',
					autogenerate: { directory: 'outro' },
				}
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
