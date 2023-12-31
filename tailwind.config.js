export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "skyBlue": "#0ea5e9",
      "black": "#000000"
    },
    screens: {
      "lg": "1000px",
      "small": "600px",
      laptopSm: {
        "max": "1100px"
      },
      tablet: {
        "max": "1000px"
      },
      mdTablet: {
        "max": "850px"
      },
      smTablet: {
        "max": "750px"
      },
      lMobile: {
        "max": "550px"
      },
      mMobile: {
        "max": "440px"
      }
    },
    extend: {
      boxShadow: {
        "inputShadow": "inset 0 0 5px var(--black)"
      }
    }
  },
  plugins: [],
}