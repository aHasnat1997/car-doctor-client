/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#be2659",

          "secondary": "#cce5df",

          "accent": "#0f2335",

          "text": "#01101e",

          "base-100": "#fdfcfa",

          "info": "#7DB1ED",

          "success": "#27B95F",

          "warning": "#976007",

          "error": "#E44D3F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

