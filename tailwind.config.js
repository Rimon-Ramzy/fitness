/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./*.{html,js,ts,jsx}'],
  purge: ['./*.{html,js,ts,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        color: {
          DEFAULT: "#FAFAF9",
          primary1: "#E6533C",
          primary2: "#EF8964",
          primary3: "#EFA082",
          primary4: "#7A29DC",
          primary5: "#0070C9",
          dark1: "#1E1E1E",
          dark2: "#303030",
          dark3: "rgba(239, 237, 232, 0.65)",
          dark4: "#323443",
          dark5: "#232532",
          dark6: "#4F5261",
          light1: "#FAFAF9",
          light1: "#EFEDE8",
        },
        darkbg: {
          light1: "#FAFAF9",
          light2: "#ccc",
          font1: "#1E1E1E",
          font2: "#4F5261",
          font3: "#232532",
        },
      },
      padding: {
        section: "50px",
      }
    },
  },
  plugins: [],
}
