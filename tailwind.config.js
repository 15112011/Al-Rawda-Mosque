/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc',
        'deep-green': '#1b4332',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'amiri': ['Amiri', 'serif'],
        'reem-kufi': ['Reem Kufi', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 