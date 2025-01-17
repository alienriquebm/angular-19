/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }: any) {
      const newUtilities = {
        "button.btn-violet": {
          backgroundColor: theme("colors.violet-50"),
          borderColor: theme("colors.violet-800"),
          color: theme("colors.violet-800"),
          "&:hover": {
            backgroundColor: theme("colors.violet-800"),
            borderColor: theme("colors.violet-800"),
            color: theme("colors.white"),
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
