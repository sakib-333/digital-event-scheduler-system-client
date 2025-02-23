/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "var(--heading)",
        text: "var(--text)",
        border: "var(--border)",
        background: "var(--background)",
        primary: "var(--primary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [require("daisyui")],
};
