module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'customBlue': '#1b4560',
      'customWarning': '#bb4121',
      'embrOrange': '#ff8a00',
     }),
     textColor: {
      'embrWhite': '#fffcf9',
      'embrOrange': '#ff8a00',
    },
    fontSize: {
      'sm': '12px'
    },
    borderColor: theme => ({
      'embrWhite': '#fffcf9',
      'embrOrange': '#ff8a00',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
