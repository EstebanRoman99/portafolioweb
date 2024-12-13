/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        text: "text 3s ease-in-out infinite",
        float: "float 6s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        text: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-120vh)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
