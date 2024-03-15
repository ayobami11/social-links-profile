import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(var(--color-primary) / 1)',
        'white': 'hsl(var(--color-white) / 1)',
        'grey': 'hsl(var(--color-grey) / 1)',
        'dark-grey': 'hsl(var(--color-dark-grey) / 1)',
        'off-black': 'hsl(var(--color-off-black) / 1)',
      },
      fontSize: {
        'body': '0.875rem'
      }
    },
    fontFamily: {
      'primary': ['var(--font-inter-variable)', 'var(--font-inter)']
    },
  },
  plugins: [],
};
export default config;
