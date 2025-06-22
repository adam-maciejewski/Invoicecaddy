const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
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
        brandGreen: {
          DEFAULT: '#788E45',
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}; 