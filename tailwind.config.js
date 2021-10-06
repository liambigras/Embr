module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'yellowishOrange' : '#FFC200',
      'orange': '#FF7900',
      'customBlue': '#1A3D54',
        'customGrey': '#2A3E4B',
     }),
     
   
    borderColor: theme => ({
      'embrWhite': '#fffcf9',
      'embrOrange': '#ff7900',
      'embrYellow': '#ffB000'
     }),
     
    extend: {
      colors: {
        'embrOrange': '#ff7900',
        green: 'green',
      },
      width: {
        '88': '22rem',
        '146': '146px',
        '190': '175px',
        '194': '194px',
        '285': '285px',
        '320' : '320px',
        '340' : '330px',
        '420' : '420px',
        '481' : '481px',
        '547':'547px',
        '600': '600px'
      },
      height: {
        '100': '100px',
        '120': '120px',
        '145': '145px'
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '22': '22px',
        '40': '40px',
        'tiny': '.875rem',
      },
     
      backgroundColor: theme => ({
        'customBlue': '#1A3D54',
        'customGrey': '#2A3E4B',
        'embrLightOrange': '#FF9100',
        'blueishCard': '#445B6A',
        'customWarning': '#D3423D',
        'embrOrange': '#ff7900',
        'greywhite': '#E5E5E5',
        'embrWhite': '#fffcf9',
        'redOxyde': '#B23028'
       }),
       backgroundImage: {
        'large-backdrop': "url('/Vector_large_backdrop.svg')",
        'medium-backdrop' : "url('/Vector_medium_backdrop.png')",
        'small-backdrop' :  "url('/Vector_small_backdrop.svg')"
       },
       padding: {
         'xs' : '1.75px',
         'sm' : '2px'
       },
       lineHeight: {
        '17': '17px',
        '21': '21.6px',
       },
       textColor: {
        'embrBlack': '#313131',
        'embrWhite': '#fffbf9',
        'embrOrange': '#ff7900',
        'darkRed': '#B23028'
      },
      inset: {
        '18' : '4.5rem'
      },
      underlineOffset: {
        'small': '-2px',
        'medium': '5px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-underline-utils')],
}
