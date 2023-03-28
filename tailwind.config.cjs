/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"poppins": ["Poppins"]
		},
		extend: {
			colors: {
				'ax-violet': '#201547',
				'dark-grey': '#0D0D0D',
				'dark-grey-2': '#262525',
				'light-grey': '#ffffff99',
				'red': '#ff6363',
				'light-red': '#fd828226'
			},
			spacing: {
        '60': '60vh',
        '13': '13vh',
      }
		},
	},
	plugins: [
		plugin(function({ addUtilities }) {
      addUtilities({
				/* Hide scrollbar for Chrome, Safari and Opera */
				'.no-scrollbar::-webkit-scrollbar': {
						'display': 'none',
				},

				/* Hide scrollbar for IE, Edge and Firefox */
				'.no-scrollbar': {
						'-ms-overflow-style': 'none', /* IE and Edge */
						'scrollbar-width': 'none',  /* Firefox */
				}
      })
    })
	],
}
