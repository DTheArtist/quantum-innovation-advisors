import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				beige: {
					100: "#f5f5dc",
					200: "#ece5c7",
					300: "#e2d5b2",
					400: "#d9caad",
					500: "#cfc29a",
					600: "#c5b987",
					700: "#bfb195",
					800: "#a89e7d",
					900: "#918b65",
					950: "#7a784d",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
