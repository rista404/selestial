import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				'2xl': '15px',
			},
		},
	},
	plugins: [],
} satisfies Config
