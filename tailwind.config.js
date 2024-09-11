/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border_green: "#469A75",
        card_bg: "#eeee",
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
          card_bg: "#151e29",
          sidebar: "#1e2a3a", // Dark theme sidebar color
          background: "#111821", // Dark background color
          textBold: "#ffffff",  // Light text for dark theme
          textLight: "#eeee", // Slightly lighter text for dark theme
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

