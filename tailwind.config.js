/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    screens:{
      "sm": "375px",
      "lg":"1440px"
    },
    extend: {
      colors:{
        "Cyan":"hsl(179deg, 62%, 43%)",
        "Bright-Yellow":"hsl(71deg, 73%, 54%)",
        "Light-Gray":" hsl(204deg, 43%, 93%)",
        "Grayish-Blue":"hsl(218deg, 22%, 67%)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
