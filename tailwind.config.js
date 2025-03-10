// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./app/**/*.{js,ts,jsx,tsx}", // If using the App Router
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         montserrat: ["var(--font-montserrat)", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-montserrat)", "sans-serif"],
//       },
//     },
//   },
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./app/**/*.{js,ts,jsx,tsx}",
//   ],
// };

module.exports = {
  theme: {
    fontFamily: {
      // This completely replaces the default fonts rather than extending them
      sans: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      // Other extensions
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
};
