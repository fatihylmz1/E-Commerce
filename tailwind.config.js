/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'shopping-card-1': "url(https://s3-alpha-sig.figma.com/img/812e/3845/7d0cc7c0071c4e5eb3752a437fda3d0d?Expires=1703462400&Signature=AXRnbrirQCq8QIT5pNOxDWkh8Q1iBrhF7yuG~OafnYNHPyLPlzYI9LoGghAa8xawga1Vof587osbuIEMnzXgYuzlhf-dB41NbpJddGeRQ-uD4BL-rUGrYPmTwk3q7BPaogVa5-owXIrj5natYqdDYuHgNOafP7aAghPOnoW152q6JZVasobpdeuvMqnw98uTQl8-KgbzVIv1CseOiKOtDySvuciLLSsdGbNI~0T54iMVGe2FJ~15bGORz6Z6pnOBn12nzO61MIsc0OxsMxsQw8RuS4ezM523MOvIFPanuzxmZoKQycWbqpGQNlDBdDgFWAWhV-Kl4pqhNR9SDFo1ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
        'shopping-card-2': "url(https://s3-alpha-sig.figma.com/img/4587/86e9/d5e9865170a32e0687f0a17d8581b9c8?Expires=1703462400&Signature=Ivt9tp~KtDtKMsTyJc57~0AvBXz8YFATetMSMQ-9-j0R1UQOIA5w-KiULd~SkdPs4h2it4of9YIAbmNjlK4VpDcQAwEIYu~vdScQ27U7mFDQyqqQg7iAfQsjGd-9aantlDJWD83gqedSwCx7rIDRzRh5rveAyhg54QMrPqgQMIBZpM4UK6~WCMjLg5~RHZ5uARx5WsAWPcEeP-2JG-6Mnh~b1ooddIZnxNtUb72ucXWBn7P9h0U~1Ua4SaNCTYm3mWSy8UaqsfsRLn2pLGZb98VtTsVrXBNpS2XgSdxWHLrmRC5DBD6XcwBUdv2z9FoXN7dPR~kTuOQsZzEVmS7N6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
        'shopping-card-3': "url(https://s3-alpha-sig.figma.com/img/81b4/0a6b/ad298edf330ec5747ae93edc6118ce4a?Expires=1703462400&Signature=q8Qmewvs7wJtpE0YFuo~2Eb0u6HckmvtVxxybqI4zZ9JwKCj~C2aynevvKj1ZKM8J2B-n~-xMXDY~BfdpL79N-2-76n~heQCgbQSSIA-Wj1hij4~9DWDUTwvyUx~-uQhSa~htMRRZXE03pOWBHQ3I-Ieffiec8BRjuQvLWwKrIs5EAvoIsyut2M8X8zXLrh9KvanRgCa~RrZaeIILjT7y93fm3SJoailSwWli34jutM1qevYsJK1iK6K1eyf-zVBnX8XolTzD86UxT2ZtAOnmchcftl1jBnfcuk2c~7R9QLuzLtoaiT7HPiJB-zueWkkIVTAKLIuRbxby0C1T4knWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",



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
      }
    },
  },
  plugins: [],
}

