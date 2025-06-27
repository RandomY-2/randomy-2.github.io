/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ["Inter", "ui-sans-serif", "system-ui"],
		},
		colors: {
		  primary: "#2563eb", // Tailwind blue-600
		},
	  },
	},
	plugins: [require("@tailwindcss/typography")],
  };
