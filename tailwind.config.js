/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'shopping-card-1': "url('/src/photos/mediabgcover1.png')",
        'shopping-card-2': "url('/src/photos/mediabgcover2.png')",
        'shopping-card-3': "url('/src/photos/mediabgcover3.png')",
        "slider-photo": "url(https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1704067200&Signature=qTsiqUygbJSqg6KND4~fRGYMMeGHB4ZBqkIObyFhvBkqnrt2AJOpJPrcGpP3~tfH2vc6bWghjNJmIrybMP97T4N4BYB61YNyvcoooMXsjBk3zDLwqWOe32~sWw5XJf5sb5klm2aPRgbpHnEhzYeaj2K9vIuU~AfJS1XQ-swdkpsFh27mg92w1gE4~w9qlTyOIrhdAGY6CY5iNC-NqQLP7zkSbCeOf88dLXF4rxQkIu3AGA4Sb5c5Qpp3MSQ8RtDdyaRkx7lxM~IIU~TJ~m61c~yGI9xhl~KzwZk-g1XFQqSxjTRS9HhvVLCvAuatLi7do0QR1fC8ppBpwWuBxEMwtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",



      },
      zIndex: {
        '1000': '1',
        '2000': '2',
        "3000": "3",

      },
      spacing: {
        '160': '40rem',
        "180": "45rem",
        "159": "39rem",
        "157": "37rem",
      },
      colors: {
        "header-blue": "#252B42",
        "site-name": "#252B42",
        "link-color": "#737373",
        "login": "#23A6F0",
        "light-blue": "#6cefed",
        "light-green": "#2bebc5",
        'regal-blue': '#2a7cc7',
        "icon-blue": "#23A6F0",
        "explore-blue": "#2D8BC0BF",
        "danger-color": "#E74040",
        "price-green": "#23856D",
        "price-grey": "#BDBDBD",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out"
      }
    },
  },
  plugins: [],
}

