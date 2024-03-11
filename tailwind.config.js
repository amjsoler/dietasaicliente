/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        colors: {
            'primary': {
              50: '#fceade',
              100: '#fdd0b2',
              200: '#faa972',
              300: '#ff903d',
              400: '#ff7e1c',
              500: '#ff6900',
              600: '#c75400',
              700: '#934100',
              800: '#6e2f00',
              900: '#492000',
              950: '#251100',
            },
        },
        fontFamily: {
            body: ['Nunito']
        }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

