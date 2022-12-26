/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
    },
    extend: {
      colors: {
        // primary
        darkCyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',

        // neutral
        darkBlue: 'hsl(212, 21%, 14%)',
        grayBlue: 'hsl(228, 12%, 48%)',
      },
      fontSize: {
        body: '14px',
      },
    },
  },
  plugins: [],
};
