/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/Business.jpg')",
        "hero-1": "url('../src/images/Mobile.jpg')",
        "hero-2": "url('../src/images/School.jpg')",
      },
      backgroundColor: {
        active: "bg-cyan-500",
        
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar-hide"),
  ],
};

