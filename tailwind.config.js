/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // #### Theme 1
        // #### Backgrounds
        blue: "hsl(222, 26%, 31%)",
        darkBlue: "hsl(223, 31%, 20%)",
        veryDarkBlue: "hsl(224, 36%, 15%)",
        // #### Keys
        lightBlue: "hsl(225, 21%, 49%)",
        veryLightBlue: "#a1b2e0",
        saturatedBlue: "hsl(224, 28%, 35%)",
        red: "hsl(6, 63%, 50%)",
        lightRed: "#f96c5b",
        darkRed: "hsl(6, 70%, 34%)",
        grey: "hsl(30, 25%, 89%)",
        brown: "hsl(28, 16%, 65%)",
        // #### Text
        greyishBlue: "hsl(221, 14%, 31%)",
        white: "hsl(0, 0%, 100%)",

        // #### Theme 2
        // #### Backgrounds
        lightGrey: "hsl(0, 0%, 90%)",
        grayishRed: "hsl(0, 5%, 81%)",
        veryLightGrey: "hsl(0, 0%, 93%)",
        // #### Keys
        cyan: "hsl(185, 42%, 37%)",
        lightCyan: "#62b4bf",
        darkCyan: "hsl(185, 58%, 25%)",
        orange: "hsl(25, 98%, 40%)",
        lightOrange: "#ff8b38",
        darkOrange: "hsl(25, 99%, 27%)",
        lightYellow: "hsl(45, 7%, 89%)",
        darkYellow: "hsl(35, 11%, 61%)",
        // #### Text
        veryDarkYellow: "hsl(60, 10%, 19%)",

        // ### Theme 3
        // #### Backgrounds
        veryDarkViolet: "hsl(268, 75%, 9%)",
        darkViolet: "hsl(268, 71%, 12%)",
        // #### Keys
        violet: "hsl(281, 89%, 26%)",
        vividMagenta: "hsl(285, 91%, 52%)",
        lightCyan: "#94fff9",
        pureCyan: "hsl(176, 100%, 44%)",
        softCyan: "hsl(177, 92%, 70%)",
        purple: "#5b7e9e",
        veryLightViolet: "#8631b0",
        lightViolet: "hsl(268, 47%, 21%)",
        darkMagenta: "hsl(290, 70%, 36%)",
        // #### Text
        strongYellow: "hsl(52, 100%, 62%)",
        darkGrey: " hsl(198, 20%, 13%)",
      },
    },
  },
  plugins: [],
};
