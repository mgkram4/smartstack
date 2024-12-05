import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#001F3F',    // Darkest blue
          primary: '#003366', // Primary blue
          medium: '#0066CC',  // Medium blue
          light: '#E6F3FF',   // Lightest blue
        },
        accent: {
          neural: '#004080',  // Neural network icon color
        }
      },
    },
  },
  plugins: [],
} satisfies Config;



