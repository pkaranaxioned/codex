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
				'light-red': '#fd828226',
				'pink': '#E41C79',
				'light-pink': 'rgba(228, 28, 121, 0.15)',
			},
			spacing: {
        '60': '60vh',
        '13': '13vh',
      },
			keyframes: {
        'fade': {
          'from': { 'opacity': '0' },
          'to': { 'opacity': '1' }
        },
        'slide-in': {
          'from': { 'transform': 'translateX(-100%)' },
          'to': { 'transform': 'translateX(0)' }
        },
        'slide-out': {
          'from': { 'transform': 'translateX(0)' },
          'to': { 'transform': 'translateX(-100%)' }
        },
		'fed-in': {
			'from': { 'right': '-100%'},
			'to': { 'right': '0'}
		},
		'fed-out': {
			'from': { 'right': '0'},
			'to': { 'right': '-100%'}
		}
      },
      animation: {
        'slide-in': 'slide-in .5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
        'slide-out': 'slide-out .5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
		'fed-in': 'fed-in .8s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
		'fed-out': 'fed-out .8s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
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
