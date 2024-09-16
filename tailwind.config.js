module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {colors: {
      'primary-400': '#6d28d9', // Exemple de couleur violet
      'secondary-600': '#4c1d95', // Exemple de couleur violet foncé
    
      'custom-violet': '#6d28d9',
      'custom-violet-dark': '#4c1d95',
    },},
  },
  plugins: [],
};

