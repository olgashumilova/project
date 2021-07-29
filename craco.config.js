/* eslint-disable */

const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
    },
    extensions: ["", ".ts", ".tsx", ".js"]
  },
};