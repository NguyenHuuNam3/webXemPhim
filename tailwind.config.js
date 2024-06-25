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
                    btnRed: '#942320',
                    btnBlue: '#1c738d',
                    dark: '#0F172A',
                    wrap: '#D97706',
                    input: '#020617',
                    border: '#64748B',
                    content: '#0f1416',
                    white: '#FFFFFF',
                    lightWhite: '#E2E8F0',
                    hoverText: '#FCD34D',
                    text: '#e9c22c',
                    textSafe : '#333',
                },
            },
        },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      display: ['group-hover'],
      transform: ['group-hover'],
      opacity: ['group-hover'],
    },
  },
  plugins: [],
}
