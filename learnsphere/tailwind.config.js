/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4338CA",   // Indigo
        secondary: "#7C3AED", // Purple
        accent: "#06B6D4",    // Cyan
        background: "#F9FAFB",// Light Gray
        dark: "#111827",      // Slate/Dark
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}