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
    },
  },
  plugins: [],
}
export default config
