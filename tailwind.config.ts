import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-blue": "#0A2F5B",
        "medium-blue": "#3478D7",
        "pale-blue": "#D5E3F7",
        "light-blue": "#8EBDFF",
        "inactive-blue": "#0072CE",
        "subtitle-blue": "#5E7795",
        "background-card-blue": "#C8DEFC",
        "toggle-blue": "#0072CE",
        "info-blue": "#0072CE",
        "cian-blue": "#34C3D7",

        // Green
        "light-green": "#CFFFF1",
        "main-green": "#5EE8C1",
        "alert-green": "#72D1B5",
        "dark-green": "#84B140",
        "green-icon": "#8BB64C",

        // Purple
        "dark-purple": "#5954D2",
        "helper-purple": "#5955D1",
        "balance-purple": "#9747FF",

        // Red
        "finished-red": "#E85E5E",
        "button-red-hover": "#AC0111",
        "alert-red": "#F84B4B",
        "border-red": "#DE2B22",
        "reported-red": "#E86F6F",
        "light-red": "#FF845D",
        "dark-red": "#ED0022",

        //Gray
        "dark-gray": "#B3B7B8",
        "background-gray": "#F6F7F9",
        "medium-gray": "#F1F6FD",
        "gray-text": "#7C8089",
        "gray-title": "#595959",
        "gray-ligth": "#A9A9A9",
        "neutral-gray-cold": "#595959",

        //Yellow
        yellow: "#FCCD00",
        "alert-yellow": "#E5BE40",

        //Pink
        pink: "#ED88A6",

        //Orange
        "warning-light": "#FCF5CB",
        "warning-dark": "#866404",

        "text-dark": "#18181A",
      }
    },
  },
  plugins: [],
};
export default config;
