/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coral': {
          '50': '#fff1f1',
          '100': '#ffe1e1',
          '200': '#ffc7c7',
          '300': '#ffa0a0',
          '400': '#ff6b6b',
          '500': '#fa3a3a',
          '600': '#e71414',
          '700': '#c20e0e',
          '800': '#a00f0f',
          '900': '#841313',
          '950': '#480707',
        },
      },
      animation: {
        'bounce-subtle': 'bounce 3s infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeInDown: {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};