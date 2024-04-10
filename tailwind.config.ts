import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      navySmoke: '#2E363E',
      mauvelous: '#C6AFC0',
      softOpal: '#F8F9EE',
      electricYellow: '#FCFC62',
      black: "#000000",
      shadowColor:"rgba(0,0,0,.15)",
      grey: '#d3d5d7',
      white: "#ffffff",
      red: "#DC143C",
    },
    extend: {
      fontFamily: {
        ramenson: ['Ramenson'],
        visby: ['Visby'],
        visbyBold: ['VisbyBold'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'float': {
          '100%': { transform: 'translate(calc(-50% - 1.25rem))' }
        }
      },
      boxShadow: {
        'custom-shadow': '0 4px 20px 0 rgba(0,0,0,0.15)',
        'custom-shadow-darkmode': '0 4px 20px 0 rgba(248,249,238,0.15)'
      },
    },
  },
  plugins: [],
}
export default config
