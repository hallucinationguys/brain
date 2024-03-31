/** @type {import('tailwindcss').Config} */
import { mochiui } from '@mochi-ui/theme'
import animate from 'tailwindcss-animate'

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@mochi-ui/theme/dist/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [mochiui(), animate],
}
