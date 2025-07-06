const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '4xl': ['40px', { lineHeight: '1.1' }], // Ustawiamy rozmiar dla nagłówków sekcji
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // main blue
        },
        secondary: {
          DEFAULT: '#10B981', // main green
        },
        accent: {
          DEFAULT: '#FBBF24', // yellow
        },
        'brand-green': '#7ca02f',
        'brand-green-dark': '#5C7A1D',
        'play-overlay': 'rgba(17, 24, 39, 0.8)',
        'play-overlay-hover': 'rgba(17, 24, 39, 0.6)',
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}; 