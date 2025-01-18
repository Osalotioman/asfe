/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#333", // Header and footer background
        secondary: {
          DEFAULT: "#007bff", // Highlight for active tabs
          hover: "#0056b3", // Button hover state
        },
        white: "#fff", // General white background
        black: {
          DEFAULT: "#000",
          100: "#333", // Text and button colors
        },
        gray: {
          100: "#f9f9f9", // Light gray background
          200: "#ddd", // Borders
          300: "#e0e0e0", // Avatar circle background
        },
        success: "#28a745", // Attended status
        danger: "#dc3545", // Missed status
        warning: "#ffc107", // Late status
        goal: "#dc3545", // Goal text
        highlight: "#f39c12", // Course info highlight
        button: "#3798ff", // Sign-in button
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Primary font
      },
      borderRadius: {
        xl: "32px", // For large elements like the QR code container
        lg: "20px", // Button borders
        md: "10px", // Status pills
        sm: "8px", // Cards and general elements
        full: "50%", // Circular shapes
      },
      boxShadow: {
        soft: "0 2px 4px rgba(0, 0, 0, 0.1)", // Card shadow
        fab: "0 2px 4px rgba(0, 0, 0, 0.3)", // FAB shadow
      },
    },
  },
  plugins: [],
};