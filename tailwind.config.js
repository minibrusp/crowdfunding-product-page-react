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
        'icon-close-modal': "url('assets/images/icon-close-modal.svg')"
      },
      gridTemplateAreas: {
        'about-reward': [
          "title . subtitle",
          "text text text",
          "stock . button"
        ],
        'modal-pledge-top': [
          "radioandspans radioandspans radioandspans . stocks",
          ". text text text text"
        ],
      },
      screens: {
        'screen-850': { 'min': '850px' },
        'screen-950': { 'min': '950px'},
        'screen-1200': { 'min': '1200px'},
        'screen-1440': { 'min': '1440px'},
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}

