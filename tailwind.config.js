/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gravitas:["Gravitas One"],
        ibmmono:['IBM Plex Mono','serif']
        
      }
    },
  },
  plugins: [],
}

