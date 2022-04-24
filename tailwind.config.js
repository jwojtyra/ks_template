const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./src/**/*.{html,js,ts}',
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		fontFamily: {
			sans: ['"Montserrat"', 'sans-serif'],
			heading: ['"Poppins"', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: colors.violet,
			},
			fontSize: {
				xxs: ['.625rem', { lineHeight: '.75rem' }],
			}
		},
	},
	plugins: [],
}