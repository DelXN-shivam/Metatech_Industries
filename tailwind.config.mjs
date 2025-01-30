import { Laptop } from '@mui/icons-material';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        phone:{'min': '320px', 'max': '767px'},
        laptop:{'min': '768px', 'max': '1280px'},
        desktop:{'min': '1281px', 'max': '1366px'},
        desktopxl:{'min': '1367px', 'max': '1920px'},
        desktop2xl:{'min': '1921px', 'max': '2560px'},

      }
    },
  },
  plugins: [],
};
