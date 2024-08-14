/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				anton: ["Anton", "sans-serif"],
				amsterdam: ["New Amsterdam", "sans-serif"]
			}
		},
	},
	plugins: [
		require("daisyui"),
		require("@tailwindcss/typography")
	],
}
