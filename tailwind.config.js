module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { poppinfont: ["Poppins", "sans-serif"] },
      width: {
        128: "28rem",
        "px-304": "304px",
      },
      maxWidth: {
        "px-275": "275px",
      },
      minWidth: {
        "px-200": "200px",
      },
      boxShadow: {
        dreamy: "0px 0px 17px 5px rgba(194,192,194,1)",
      },
      height: {
        "px-550": "550px",
      },
    },
    screens: {
      sm: "0px",
      // => @media (min-width: 640px) { ... }

      md: "600px",
      // => @media (min-width: 768px) { ... }

      lg: "900px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
