/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fefbf8',
          100: '#f6d1b3',
          400: '#fb923c',
          500: '#f97316',
          600: '#d95f00',
          700: '#e26702',
          800: '#e26600',
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          150: '#ececee',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'custom': '40%',
      },
      boxShadow: {
        '3d': '0 4px 0 rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15)',
        '3d-orange': '0 4px 0 #d95f00, 0 8px 16px rgba(226,103,2,0.3)',
      },
    },
  },
  plugins: [],
}