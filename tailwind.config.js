/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'shopping-card-1': "url(https://s3-alpha-sig.figma.com/img/812e/3845/7d0cc7c0071c4e5eb3752a437fda3d0d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xk-dJTHByrnnUKbXcjVgnVVN7Ko4i9wIWdyKqmJHhGPLW-Eh-QqYbRCyCvUGz1aAAXRMH69GS-8-YjA7E66LbVhh3i0RjeD2eiv0hMPCp0uNFpAKB2MK0qA1XSakjAGGlxdbZOjooo2BFCIdhCItvbWWXHStDdlSnNfjIP301Aih3~MZ38eBBYHtxM3ylUa~luG3YZ7-5FwlEqbQEo9LxGgNuri8RufCkElETO~t1AsSWYqo9S1GLJIxDq8bFO~9t7FkQJUPoFdRTug6FD4ZWD9b~p4jFWtv9k~YdTJUebFdnai0HjgSrQDgChRVrFCCTCaTfcR080MDdxSPW7U4HQ__)",
        'shopping-card-2': "url(https://s3-alpha-sig.figma.com/img/4587/86e9/d5e9865170a32e0687f0a17d8581b9c8?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eooXQ4JNAVX-BqznSi4m5qtCM4jeIkTa-KVS0HwKZ3f9o0bWeo94CBhHf8sy4mq~TMBxrtYwuyvUaz47kcVkKGtSzzB1GYLk91x87TnzmhcFeI4CUwgGr1xsqMOrNGHT9Antc9nOXZkKT2BIxpCbUo-H~cOe8mkCclCmkZRr5LblUrAVumtz0UKBIlLljjN1YPXxAFUIZOKDRdFjVdp-5fgKTvXj2gGe4NVuad0YiOeH3leNo8hhl8irseDJ~JwTXgAQG3J2tYcblnUaPQ3XMuRXRlyYtMeNXd7y97Cg1ZK2KI6vlcDYnC4a5qO0GAuEhOz9czesl28jA0nJRTLGCA__)",
        'shopping-card-3': "url(https://s3-alpha-sig.figma.com/img/81b4/0a6b/ad298edf330ec5747ae93edc6118ce4a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ehX8EuIfUbT0PO1RP50RHGsZGauX1tDZ01DMm8chURZbVqFi52FgfKAwu~jGWGFGv4o~1~TfEvpW11PuXCz0B1ECRjzX79HoqZqS~ItHrcXghwmBX2AY~z26tvXn5v3WwzQS24AnJ~Lue4vdh6Ub-gYXlDm1C8l8xi7qRVYX0S4b0uPr8REeOhzdY1tjf3Eul6HBOR8VsXffk2e2pMSZCe0DJoNqgh48Uoh5irmqoQ6NqYVmBvBkjkb9OnS96-~f6wQCcQIayTeds~YcSJl0wTLBMrFhukpcymuhxjgOLyjZHEC5Hc8UXXhqWzfMd3eHdU-THWElH1YpiE8LO910Gg__)",
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

