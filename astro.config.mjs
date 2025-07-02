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
					translations: { ru: 'Введение', de: 'Einleitung', es: 'Introducción' },
					autogenerate: { directory: 'intro' },
					collapsed: true,
				},
				{
					label: 'Start',
					translations: { ru: 'Старт', de: 'Start', es: 'Inicio' },
					autogenerate: { directory: 'start' },
					collapsed: true,
				},
				{
					label: 'Pipeline',
					translations: { ru: 'Процесс', de: 'Ablauf', es: 'Proceso' },
					autogenerate: { directory: 'pipeline' },
					collapsed: true,
				},
				{
					label: 'Channels',
					translations: { ru: 'Каналы', de: 'Kanäle', es: 'Canales' },
					autogenerate: { directory: 'channels' },
					collapsed: true,
				},
				{
					label: 'Wiki',
					translations: { ru: 'Вики', de: 'Wiki', es: 'Wiki' },
					autogenerate: { directory: 'wiki' },
					collapsed: true,
				},
				{
					label: 'Outro',
					translations: { ru: 'Заключение', de: 'Abschluss', es: 'Final' },
					autogenerate: { directory: 'outro' },
					collapsed: true,
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
