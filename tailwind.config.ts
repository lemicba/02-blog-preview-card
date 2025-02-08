import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['var(--font-figtree)', ...fontFamily.sans],
      },
      colors: {
        yellow: '#f4d04e',
        white: '#ffffff',
        gray: {
          '500': '#6b6b6b',
          '950': '#121212',
        },
      },
      spacing: {
        50: '4px',
        100: '8px',
        150: '12px',
        300: '24px',
      },
      boxShadow: {
        'dark-100': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'dark-200': '16px 16px 0px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
