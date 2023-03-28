/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"poppins": ["Poppins"]
		},
		extend: {
			colors: {
				'ax-violet': '#201547',
				'dark-grey': '#151010',
				'dark-grey-2': '#262525',
			},
		},
	},
	plugins: [],
}
