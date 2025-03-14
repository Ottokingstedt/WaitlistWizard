/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(222.2 47.4% 11.2%)',
        accent: 'hsl(280 40% 50%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};