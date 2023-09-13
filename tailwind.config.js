/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['Commissioner', 'sans-serif'],
      },
      colors: {
        primary: {
          'moderate-cyan': 'hsl(176, 50%, 47%)',
          'dark-cyan': 'hsl(176, 72%, 28%)',
        },
        neutral: {
          'black': 'hsl(0, 0%, 0%)',
          'dark-gray': 'hsl(0, 0%, 48%)'
        }
      },
      backgroundImage: {
        'mobile-hero': "url('assets/images/image-hero-mobile.jpg')",
        'desktop-hero': "url('assets/images/image-hero-desktop.jpg')",
        'burger-menu': "url('assets/images/icon-hamburger.svg')",
        'burger-close': "url('assets/images/icon-close-menu.svg')",
        'logo-mastercraft': "url('assets/images/logo-mastercraft.svg')",
      },
    },
  },
  plugins: [],
}

