import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#151515',
				red: '#FF4500',
				yellow: '#FFCC33',
				creme: '#E4BF88',
				dust: '#ECE4D6',
				light: '#F4F4F4',
			},
			borderRadius: {
				'2xl': '15px',
			},
			screens: {
				'2xl': '1500px',
			},
		},
	},
	plugins: [],
} satisfies Config
