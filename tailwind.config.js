module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: theme => ({
         'hero-background-image': "url('../src/static-background.jpeg')",
        })
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
