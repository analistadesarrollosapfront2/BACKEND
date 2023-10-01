// DBController.js
const mysql = require('mysql');
const dbConfig = require('./DBConnection');

const pool = mysql.createPool(dbConfig.database);

function executeQuery(sql, values) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  executeQuery,
};
