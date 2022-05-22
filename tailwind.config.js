module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#2F8F9D",

          "secondary": "#3BACB6",

          "accent": "#82DBD8",

          "neutral": "#115e59",

          "base-100": "#cffafe",

          "info": "#22d3ee",

          "success": "#22c55e",

          "warning": "#fbbf24",

          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
