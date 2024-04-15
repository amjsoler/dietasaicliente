/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'primary': {
              50: '#aac6b8',
              100: '#8ec5a8',
              200: '#64c392',
              300: '#33b873',
              400: '#1dc56e',
              500: '#09c865',
              600: '#08ae58',
              700: '#067a3e',
              800: '#046734',
              900: '#022e17',
              950: '#022312',
            },
            'background': "#fafafa",

        },
        fontFamily: {
            body: ['Nunito']
        }
    },
  },
  plugins: [
  ],
}

