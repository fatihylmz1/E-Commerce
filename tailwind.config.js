/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'shopping-card-1': "url(https://s3-alpha-sig.figma.com/img/812e/3845/7d0cc7c0071c4e5eb3752a437fda3d0d?Expires=1704672000&Signature=HHsTYuE9qpu97HjfqYUBS0xph58nbGDjmj1uZ9v1NFRoeKqG5Xczn6EluQxW43aoAsEjT8Fok~5K9seMEEWITrVd6zze8XwTl5adHX4eOeahwJN3~wdwwlegSf2uhtrCcsbZ7gNtD1vzm7ISv4iCZGpqIO1W5xQru001CTfiQ-UhmalnAndJcmoU-lMhbzZmr1a-d~fKQjXbF5150HYUd3P-tc~E3E9D6B4XclHaT4by6yOa-KhWpdYpZlYx~WmNUHX5~nolhRIgnJCxw9DGiY8LdjF-w290z3VMpntT4PRyusVVNXfHUz6xsiz7FR7PdGjpTZiUMj3kvERyeemYVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
        'shopping-card-2': "url(https://s3-alpha-sig.figma.com/img/4587/86e9/d5e9865170a32e0687f0a17d8581b9c8?Expires=1704672000&Signature=DoqDkAfNL1wRCZWM0gu5RWobU0f75XtU0q3LQNzpXNr2pT7ITprX6MWjFq1YTQz9Ert-GRjt9pSxN4oYlvdSnONe0E9Ll13qnR9WPxsktk6JYuRWfrc4OtdzG6hLzgULH6TeNAsHxb6NBUIioWWycp6OTxICrNPieJ4G7RxzbGgEtqaGs5~F1dTwhQRvFOUkqe5tV5B2bnSg8HWOO8IwuhuygfOh6MVK616sDKq6Uc8Pebfcu5UaDRjlOI~u1PHLoaK3A3tEQmbWL3d6pCsr1zVXLVIZksI5tDLPbU6CCToMw1eJeT8Nlrc2sARI5GtFfY8sQZjmvgifanjhbrYJBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
        'shopping-card-3': "url(https://s3-alpha-sig.figma.com/img/81b4/0a6b/ad298edf330ec5747ae93edc6118ce4a?Expires=1704672000&Signature=HKbW~9qXCpck3pXQZzTYe44Bl9UYDdE3DFRT2QFmzoiRP7ZGDPBsqHecb58U3iZg2~Iu2DQwmxjuVrp2QBMGQ4u7WeN79vBZCFQhGU-zV9rxI5XoEDgx5IHbosOtM6iYnwGd4Wo0K91gUhvhN13sRIKXuMqAnmrcJO~SqyMV5FWjy5Xz2I2QEJG2ycjzG-LProDnbvejHaNAiQxDkrnWZ4LVMt5f4GImMg~YUnJfmOTj7VJYPb9M6pOJ~FhsVw6S8eTBSYQtwS48300mURRNElF6KN2qfdETlilgS1amfYwiK2K-DZL1r1VVFoWGkTDF1J26WyW8v-S6x1o8gcSFFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
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

