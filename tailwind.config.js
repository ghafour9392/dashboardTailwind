/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(#22215B 35%, #FFC700 35%, #FFC700 50%, #4CE364 50%, #4CE364 65%, #567DF4 65%);",
      },
    },
  },
  plugins: [],
};
