/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["poppins"],
    },
    extend: {
      screens: {
        xsm: "500px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",

        tablet: "768px",
        ipad: "1024px",
        desktop: "1280px",
        cont: "1025px",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        Primary: "#292B30",
        Primary60: "#042268",
        SecondaryBase: "#FF7A60",
        BorderColor: "#b6b8b9",
        bgColor: "#fafbff",
      }
   
    },
  },
  plugins: [],
};
