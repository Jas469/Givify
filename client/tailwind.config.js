/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      's': ['DynaPuff', 'cursive'],
      'p': ['Alumni Sans Inline One'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'o':[ 'Oswald', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hello': "url('../public/sample_img2.jpg')",
        
      },
      
    },
    screens: {
      'xsm': {'min': '300px', 'max': '720px'},
      'sm': {'min': '721px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  },
  plugins: [
    // require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
}
