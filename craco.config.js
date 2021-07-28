/* eslint-disable */

const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),

      //Images
      '@GameCompaniesLogos': path.resolve(__dirname, 'src/assets/gameCompaniesLogos'),
      '@GamePlatformsLogos': path.resolve(__dirname, 'src/assets/gamePlatformsLogos'),
      '@GamesImages': path.resolve(__dirname, 'src/assets/gamesImages'),

      //Routes
      '@Routes': path.resolve(__dirname, 'src/components'),

      //Scss
      '@MainScss': path.resolve(__dirname, 'src/styles'),

      // Search Bar
      '@SearchBar': path.resolve(__dirname, 'src/components/searchBar'),

      // Game Card
      '@GameCard': path.resolve(__dirname, 'src/components/gameCard'),

      // Home
      '@HomeComponent': path.resolve(__dirname, 'src/components/home'), 

      // Footer
      '@FooterComponent': path.resolve(__dirname, 'src/components/footer'),
      
      // Header
      '@HeaderComponent': path.resolve(__dirname, 'src/components/header'),

      // Modals
      '@Modal': path.resolve(__dirname, 'src/components/modals'), 
    },
    extensions: ["", ".ts", ".tsx", ".js"]
  },
};