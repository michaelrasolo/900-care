import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        ultra: "Ultra-Ultra",
        ultra2: "Ultra",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "almost-black": "#181716",
        "dark-green": "#36AB63",
        "light-green": "#E4FFEE",
        "grey": "#BBBABA",
        "yellow":"#FFE967",
        'light-yellow':"#FFFBE1",
        'light-pink':"#FFADD5",
        'light-blue':"#C7E5FA",
        'pink':"#FF3395",
      },
      height:{
        'screen-minus-90': 'calc(100vh - 90px)',
      },
      borderRadius: {
        "large":"2.625rem"
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
