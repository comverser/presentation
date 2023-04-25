/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				pretendard: ['Pretendard-Regular', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: []
};
