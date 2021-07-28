/* eslint-disable */

const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@GameCompaniesLogos': path.resolve(__dirname, 'src/assets/gameCompaniesLogos'),
      '@GamePlatformsLogos': path.resolve(__dirname, 'src/assets/gamePlatformsLogos'),
      '@GamesImages': path.resolve(__dirname, 'src/assets/gamesImages'),
    }
  },
};