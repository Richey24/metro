/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['"Pathway Extreme"', 'sans-serif']
      },
      colors: {
        'home': '#F3F6FF',
        'nav': '#0D47A1',
        'donate': "#DE4277",
        'brighter': "#46C5E7",
        'mission': "#4B5563",
        'pillar': "#FAFAFA",
        'puprle': "#8E24AA",
        'green': "#2E7D32",
        'event': "#F2ECF8",
        'footer': "#FAFAFA",
        'email-border': "#E3E8F0",
        'testimony': "#707070",
      },
      boxShadow: {
        '3xl': "1px 1px 3px #00000029"
      }
    },
  },
  plugins: [],
}

