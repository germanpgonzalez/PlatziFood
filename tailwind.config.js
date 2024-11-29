module.exports = {
  content: [
    "./public/index.html",
    "./public/header.html",  // Ruta al HTML
    "./public/home.html",  // Ruta al HTML
    "./src/**/*.{js,jsx,ts,tsx}",  // Rutas a tus archivos JS/TS si los tienes
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