module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E5',
        }
      },
      borderRadius: {
        smd: '0.25rem'
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        ubuntu: "'Ubuntu', sans-serif",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
