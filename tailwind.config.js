module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        121: "121px",
      }
    },
    screens: {
      md: { max: "768px" },
      sm: { max: "640px" },
    },
  },
  plugins: [],
}
