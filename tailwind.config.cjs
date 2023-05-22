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
				'light-grey-2': '#ffffff1a',
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
				'slide-in-left': {
					'from': { 'transform': 'translateX(-100%)' },
					'to': { 'transform': 'translateX(0)' }
				},
				'slide-out-left': {
					'from': { 'transform': 'translateX(0)' },
					'to': { 'transform': 'translateX(-100%)' }
				},
				'slide-in-right': {
					'from': { 'right': '-100%'},
					'to': { 'right': '0'}
				},
				'slide-out-right': {
					'from': { 'right': '0'},
					'to': { 'right': '-100%'}
				},
				'theme-shutter-in': {
					'from': {'opacity': '0','visibility': 'hidden','bottom': '0'},
					'to': {'opacity': '1','visibility': 'visible','bottom': '55px'}
				},
				'theme-shutter-out': {
					'from': {'opacity': '1','visibility': 'visible','bottom': '55px'},
					'to': {'opacity': '0','visibility': 'hidden','bottom': '0'}
				}
			},
			animation: {
				'slide-in-left': 'slide-in-left .5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
				'slide-out-left': 'slide-out-left .5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
				'slide-in-right': 'slide-in-right .5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
				'slide-out-right': 'slide-out-right .5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
				'theme-shutter-in': 'theme-shutter-in .5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
				'theme-shutter-out': 'theme-shutter-out .5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
			},
			typography: {
				DEFAULT: {
					css: {
						p: {
							fontSize: '16px',
							color: '#fff'
						},
						li: {
							fontSize: '16px',
							color: '#fff'
						},
						a: {
							color: '#E41C79',
							'text-decoration-line': 'none',
							'&:hover': {
								'text-decoration-line': 'underline'
							}
						},
						ul: {
							marginTop: '0',
							marginBottom: '16px'
						},
						table: {
							borderCollapse: 'collapse',
							width: '100%'
						},
						th: {
							padding: '12px',
							border: '1px solid #fff',
							lineHeight: '24px',
							textAlign: 'center',
							verticalAlign: 'middle',
							background: '#201547'
						},
						td: {
							padding: '8px',
							border: '1px solid #fff',
							lineHeight: '24px',
							color: '#fff'
						},
						tr: {
							padding: '8px',
							border: '1px solid #fff',
							lineHeight: '24px'
						},
					}
				}
			},
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
				},
				
				'.scrollbar::-webkit-scrollbar': {
					'width': '12px'
				},
				
				'.scrollbar::-webkit-scrollbar-track': {
					'border-radius': '10px',
					'background': 'rgba(0, 0, 0, 0)'
				},
				'.scrollbar::-webkit-scrollbar-thumb': {
					'background': '#E41C79',
					'border-radius': '999999px',
					'border': '5px solid rgba(0, 0, 0, 0)',
					'background-clip': 'padding-box'
				},
				
			})
		}),
		require('@tailwindcss/typography'),
	],
}
