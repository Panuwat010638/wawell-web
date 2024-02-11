import {nextui} from '@nextui-org/theme'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ss': '480px',
      's': '560px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
  },
  },
  darkMode: "class",
  plugins: [nextui(),]
};
