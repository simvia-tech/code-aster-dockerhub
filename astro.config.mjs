// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'code_aster docker catalog',
			social: [
				{icon: "seti:docker", label:"dockerhub", href:"" },
				{icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/simvia-tech/'}],
			customCss: [
                        './public/css/global.css',
                ],
			sidebar: [
				{
					label: 'Catalog',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'code_aster 16', slug: 'catalog/code_aster_16' },
						{ label: 'code_aster 17', slug: 'catalog/code_aster_17' },
					],
				},
				{
					label: 'Tips and Tricks',
					items: [
						{label: "Installation", slug: 'usage/installation'},
						{label: "Usage", slug: 'usage/usage'},
					]
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
