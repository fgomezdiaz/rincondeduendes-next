import type { Config } from "tailwindcss";
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			backgroundImage: {
				'grid-pattern': `
				  linear-gradient(to right, #e5e7eb 1px, transparent 1px),
				  linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
				`,
			  },
			  backgroundSize: {
				'grid-pattern': '10px 10px',
			  },
		},
	},
  plugins: [
	  typography,
    daisyui,
		
  ],

};
export default config;
