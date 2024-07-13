/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-xl": ["144px", { lineHeight: "171.9%" }],
        "heading-l": ["100px", { lineHeight: "114.6%" }],
        "heading-m": ["56px", { lineHeight: "64.2%" }],
        "heading-s": ["32px", { lineHeight: "36.7%" }],
        "heading-xs": ["28px", { lineHeight: "33.6%" }],
        "subheading-l": ["28px", { lineHeight: "32.1%" }],
        "subheading-s": ["14px", { lineHeight: "16.8%" }],
        "nav-text": ["16px", { lineHeight: "19.2%" }],
        "body-text": ["18px", { lineHeight: "180%" }],
      },
      letterSpacing: {
        "heading-xs": "4px",
        "subheading-s": "2px",
        "nav-text": "2px",
      },
      colors: {
        "dark-navy": "#0B0D17",
        "ligth-blue": "#D0D6F9",
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        Bellefair: ["Bellefair", "sans-serif"],

        regularBarlow: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "home-desktop": "url('./assets/home/background-home-desktop.jpg')",
        "home-mobile": "url('./assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('./assets/home/background-home-tablet.jpg')",

        "destination-desktop":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "destination-mobile":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('./assets/destination/background-destination-tablet.jpg')",

        "crew-desktop": "url('./assets/crew/background-crew-desktop.jpg')",
        "crew-mobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('./assets/crew/background-crew-tablet.jpg')",

        "technology-desktop":
          "url('./assets/technology/background-technology-desktop.jpg')",
        "technology-mobile":
          "url('./assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('./assets/technology/background-technology-tablet.jpg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      // add transparent utility for the picture crew
      addUtilities({
        ".transparent-gradient": {
          "mask-image": "linear-gradient(to bottom, black 77%, transparent)",
        },
      });
    },
  ],
};
