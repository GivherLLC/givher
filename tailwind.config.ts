import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

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
      black: '#1A1A1A',
      shadowColor: 'rgba(0,0,0,.15)',
      grey: '#d3d5d7',
      white: '#ffffff',
      red: '#DC143C',
      overlay: 'rgba(0,0,0,.75)',
      zoomColor: '#00000024',
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
        float: {
          '100%': { transform: 'translate(calc(-50% - 1.25rem))' },
        },
      },
      boxShadow: {
        'custom-shadow': '0 4px 20px 0 rgba(0,0,0,0.15)',
        'custom-shadow-small': '0px 1px 4px rgba(0, 0, 0, 0.16)',
        'custom-shadow-clients': '0px 3px 8px rgba(0, 0, 0, 0.24)',
        'custom-shadow-darkmode': '0 4px 20px 0 rgba(248,249,238,0.15)',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [typography],
};
export default config;
