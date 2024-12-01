module.exports = {
  content: [
    "./public/index.html",
    "./public/header.html",  
    "./public/home.html",  
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535',
      },
      height: {
        '80':'20rem',
        '100':'25rem'
      }
    },
  },
  plugins: [],
};