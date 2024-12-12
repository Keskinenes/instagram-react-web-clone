/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0095f6',
        facebook: '#4cb5f9',
        link: '#69cffc'
      },
      backgroundImage: {
        'logo-pattern': 'url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk)',
      }
    },
  },
  plugins: [],
}

