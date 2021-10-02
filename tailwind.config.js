module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'customBlue': '#364361',
      'customWarning': '#D3423D',
      'embrOrange': '#ff7900',
      'embrWhite': '#fffcf9'
     }),
     textColor: {
      'embrBlack': '#313131',
      'embrWhite': '#fffcf9',
      'embrOrange': '#ff7900',
    },
    fontSize: {
      'xs': '11px',
      'sm': '12px',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
     '3xl': '1.875rem',
     '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
     '7xl': '5rem',
    },
    borderColor: theme => ({
      'embrWhite': '#fffcf9',
      'embrOrange': '#ff7900',
      'embrYellow': '#ffB000'
     }),
     
    extend: {
      width: {
        '88': '22rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
