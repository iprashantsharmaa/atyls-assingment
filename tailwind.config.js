/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderImage: {
        'custom-gradient': 'linear-gradient(129.59deg, #969696 0%, #343434 98.18%)',
      },
      colors: {
        title: 'rgba(197, 199, 202, 1)',
        subTitle: 'rgba(127, 128, 132, 1)',
        blue: 'rgba(74, 150, 255, 1)',
        border: 'rgba(53, 55, 59, 1)',
        secondaryLight: 'rgba(197, 199, 202, 1)',
        secondaryDark: 'rgba(19, 19, 25, 1)',
        primaryLight: 'rgba(107, 108, 112, 1)',
        primary: 'rgba(39, 41, 45, 1)',
        primaryDark: 'rgba(25, 25, 32, 1)',
      },
    },
  },
  plugins: [],
};
