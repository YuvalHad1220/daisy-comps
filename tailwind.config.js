/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['rubik']
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    dir: "rtl",
    // themes: [{
    //   light: {
    //     ...require("daisyui/src/theming/themes")["[data-theme=light]"],
    //     // "base-100": "#272829"
    //   }
    // }]

  }
}

