/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    // extend: {},
    fontFamily: {
      sans: 'OpenSans, sans-serif',
    },
    colors: {
      midnightGreen: '#0F3E50',
      mediumNavy: '#2B5564',
      maximumRed: '#DA291C',
      white: '#fff',
      terraCotta: '#ED7C60',
      pewter: '#7F99A2',
      cream: '#FCFAF6',
      lightGrey: '#F7F7F7',
      midGrey: '#DDDDDD',
      brightGrey: '#E5E7EB',
      'teal-100': '#EEF6F6',
      'teal-200': '#C7E1E0',
      'teal-300': '#8FC4C1',
      'teal-600': '#41B0AA',
      'primary-500': '#1E1E1E',
      transparent: 'transparent',
      'neutral-100': '#F3F4F6',
      'neutral-200': '#E5E7EB',
      'neutral-300': '#D1D5DB',
      'neutral-400': '#9CA3AF',
      'neutral-600': '#4B5563',
      'neutral-900': '#111827',
      dark: '#313131',
      current: 'currentColor',
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1780px',
    },
  },
  plugins: [],
};

