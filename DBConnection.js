// DBConnection.js
require('dotenv').config();

module.exports = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    user: process.env.DB_PASSWORD || 'root',
  },
};
