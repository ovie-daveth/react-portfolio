/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        sidebar_blue: "#5469C9",
        sidebar_purple: "#5D6BA7",
        sidebar_orange: "#D67553",
        sidebar_green: "#54B689",
        sidebar_light: "#f5f5f5", // New light background color
        textBold: "#292929",
        textLight: "#4f4f4f", // Fixed extra "#" character
        
        // Dark theme colors
        dark: {
          sidebar: "#1e2a3a", // Dark theme sidebar color
          background: "#111821", // Dark background color
          textBold: "#ffffff",  // Light text for dark theme
          textLight: "#d1d1d1", // Slightly lighter text for dark theme
        },
      },
    },
  },
  plugins: [],
}
