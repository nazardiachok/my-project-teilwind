/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      extend: {
        "brightRed": 'hsl(12, 88%, 59%)',
        "brightRedLight": 'hsl(12, 88%, 69%)',
        "brightRedSupLight": '#f9e0d8',
        "darkBlue": 'hsl(228, 39%, 23%)',
        "darkGrayisBlue": 'hsl(227, 12%, 61%)',
        "veryDarkBlue": 'hsl(233, 12%, 13%)',
        "veryPaleRed": 'hsl(13, 100%, 96%)',
        "veryLightGray": 'hsl(0, 0%, 98%)',
        'blue': '#1fb6ff',
      'purplebey': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6'
      }
    },
  },
  plugins: [],
}
