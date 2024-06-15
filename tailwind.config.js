/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./Pages/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poetsenOne: ["Poetsen One", "serif"],
      },

      colors: {
        "off-white": "#FDFDFD",
        "bg-blue": "#365162",
      },

      transitionProperty: {
        width: "width",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #365162 80%, #FDFDFD 80%)",
      },

      gap: {
        "5p": "5%",
        "10p": "10%",
        "15p": "15%",
        "20p": "20%",
      },
    },
  },
  plugins: [],
};
