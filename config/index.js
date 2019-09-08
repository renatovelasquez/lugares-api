require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  clientIdFoursquare: process.env.CLIENT_ID,
  clientSecretFoursquare: process.env.CLIENT_SECRET
};

module.exports = { config };