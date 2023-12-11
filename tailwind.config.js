/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'shpping-card-1': "url(https://s3-alpha-sig.figma.com/img/812e/3845/7d0cc7c0071c4e5eb3752a437fda3d0d?Expires=1703462400&Signature=AXRnbrirQCq8QIT5pNOxDWkh8Q1iBrhF7yuG~OafnYNHPyLPlzYI9LoGghAa8xawga1Vof587osbuIEMnzXgYuzlhf-dB41NbpJddGeRQ-uD4BL-rUGrYPmTwk3q7BPaogVa5-owXIrj5natYqdDYuHgNOafP7aAghPOnoW152q6JZVasobpdeuvMqnw98uTQl8-KgbzVIv1CseOiKOtDySvuciLLSsdGbNI~0T54iMVGe2FJ~15bGORz6Z6pnOBn12nzO61MIsc0OxsMxsQw8RuS4ezM523MOvIFPanuzxmZoKQycWbqpGQNlDBdDgFWAWhV-Kl4pqhNR9SDFo1ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",

      },
      zIndex: {
        '1000': '1',
        '2000': '2',

      },
      spacing: {
        '160': '40rem',
        "180": "45rem",
      },
      colors: {
        "header-blue": "#252B42",
        "site-name": "#252B42",
        "link-color": "#737373",
        "login": "#23A6F0",
        "light-blue": "#6cefed",
        "light-green": "#2bebc5",
        'regal-blue': '#2a7cc7',
      }
    },
  },
  plugins: [],
}

