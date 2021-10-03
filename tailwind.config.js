module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'yellowishOrange' : '#FFC200',
      'orange': '#FF7900'
     }),
     textColor: {
      'embrBlack': '#313131',
      'embrWhite': '#fffbf9',
      'embrOrange': '#ff7900',
    },
   
    borderColor: theme => ({
      'embrWhite': '#fffcf9',
      'embrOrange': '#ff7900',
      'embrYellow': '#ffB000'
     }),
     
    extend: {
      width: {
        '88': '22rem',
        '320' : '320px',
        '420' : '420px',
        '481' : '481px',
        '547':'547px'
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '22': '22px',
        '40': '40px',
        'tiny': '.875rem',
      },
      backgroundColor: theme => ({
        'customBlue': '#364361',
        'blueishCard': '#445B6A',
        'customWarning': '#D3423D',
        'embrOrange': '#ff7900',
        'embrWhite': '#fffcf9',
        'redOxyde': '#B23028'
       }),
       padding: {
         'xs' : '1.75px'
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
