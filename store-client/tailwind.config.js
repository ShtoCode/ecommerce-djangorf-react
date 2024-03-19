/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-rgb': '#DAFFFB',
        'secondary-rgb': '#64CCC5',
        'tertiary-rgb': '#176B87'
      },
    },
  },
  plugins: [],
});

