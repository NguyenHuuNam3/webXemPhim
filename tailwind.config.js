/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
        extend: {
            keyframes: {
                'expand': {
                '0%': { width: '0%' },
                '100%': { width: '90%' },
                },
            },
            animation: {
                'expand': 'expand 0.3s ease-in-out forwards',
            },
            colors: {
                primary: {
                    DEFAULT: '#263238',
                    dark: '#0F172A',
                    wrap: '#D97706',
                    input: '#020617',
                    border: '#64748B',
                    content: '#0f1416',
                    white: '#FFFFFF',
                    lightWhite: '#E2E8F0',
                    hoverText: '#FCD34D',
                },
            },
        },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
}
