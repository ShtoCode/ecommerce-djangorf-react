/** @type {import('tailwindcss').Config} */
export default {
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
}

