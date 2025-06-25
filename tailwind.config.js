/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#3281E8',
      'purple': '#7e5bef',
      'pink': '#FB61AE',
      'orange': '#FB7661', // исправлена кавычка
      'green': '#5BEC8D',
      'lightblue': '#40E7E5',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },


    extend: {
      fontFamily: {
        sans: ['"Geologica Variable"', 'sans-serif'],
        serif: ['"Geologica Variable"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'brand': '8px 24px 8px 24px',
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
