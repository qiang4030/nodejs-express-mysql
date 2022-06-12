const mysql = require("mysql");
const dbConfig = require("../config/db.config");

const pool = mysql.createPool(dbConfig);

const execSQL = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        return reject(err);
      }
      conn.query(sql, values, (error, rows) => {
        conn.release();
        if (error) {
          return reject(error);
        }
        resolve(rows);
      });
    });
  });
};

module.exports = execSQL;
