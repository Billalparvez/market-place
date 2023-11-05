

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: [
    {
      mytheme: {
        "neutral": "#2b3440",
      },
    },
  ],
  plugins: [require("daisyui")],
}