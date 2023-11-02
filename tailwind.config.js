/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}", ,],
  theme: {
    extend: {
      spacing: {
        some_key: {
          1.5: "0.375rem",
        },
      },
    },
  },
  plugins: [],
};
