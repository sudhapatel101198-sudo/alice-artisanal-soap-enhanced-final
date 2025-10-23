module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT:"#164A2C", light:"#2C6B45", cream:"#F5F2EB", beige:"#EFE8DA" }
      },
      backgroundImage: {
        bubbles: "url('/bubbles.gif')",
        leaves: "url('/leaves.gif')"
      },
      fontFamily: {
        serif: ["Georgia","ui-serif","serif"],
        sans: ["Inter","ui-sans-serif","system-ui","sans-serif"]
      }
    }
  },
  plugins: []
}
