/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {},
    },
    extend: {
      keyframes:{
        spinning:{
          '0%':{transform: 'rotate(0deg)'},
          '100%':{transform: 'rotate(360deg)'},
        }
      },
      animation:{
        'spinning':'spinning 15s linear infinite'
      },
      backgroundImage: {
        linear1: "var(--linear-1)",
        linear2: "var(--linear-2)",
        linear3: "var(--linear-3)",
        linear4: "var(--linear-4)",
        linear5:"var(--linear-5)",
        "box-color": "var(--box-color)",
      },

      backgroundColor: {
        primary: "var(--primary-color)",
        "color-orange": "var(--orange-color)",
        "mode-color": "var(--mode-color)",
        "color-green": "var(--green-color)",
        "color-orange2": "var(--second-orange)",
        "color-gray": "var(--gray-color)",
        "color-gray2": "var(--gray-secondary)",
        registerbg: "var(--register-bg)",
        graybg: "var(--gray-bg)",
        "box-color": "var(--box-color)",
        'pl-white':'#f1f5f9',
        "mode-color2": "var(--text-color)",
        
      },
      boxShadow: {
        boxShadow: "var(--shadow2)",
        boxShadow2: "var(--shadow2)",
        modeShadow: "var(--mode-shadow)",
        btnShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);",
        topShadow:
          "var(--shadowTop)",
      },
      dropShadow: {
        text: "var(--text-shadow)",
      },
      colors: {
        primary: "var(--primary-color)",
        "color-orange": "var(--orange-color)",
        "mode-color": "var(--text-color)",
        "color-green": "var(--green-color)",
        "color-orange2": "var(--second-orange)",
        "color-gray": "var(--gray-color)",
        "color-gray2": "var(--gray-secondary)",
        "color-black": "var(--black-color)",
        register: "var(--register-text-color)",
        textColor: "var(--text-color)",
        'pl-white':'#f1f5f9'
      },
      borderColor: {
        primary: "var(--primary-color)",
        register: "var(--register-text-color)",
        "color-border1": "var(--mode-color)",
        "color-border2": "var(--text-color)",
        'pl-white':'#f1f5f9'
      },
      outlineColor:{
        primary:"var(--primary-color)"
      }
    },
    screens: {
      sss: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      hlg: "1440px",
      xl: "1700px",
    },
    
  },
  plugins: [require("tailwindcss-rtl")],
};
