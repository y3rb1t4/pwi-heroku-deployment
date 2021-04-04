const mysql = require("mysql");
const util = require("util");

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;

let pool = mysql.createConnection(
  "mysql://bdd4315c716ca2:6263d33d@us-cdbr-east-03.cleardb.com/heroku_4f9f340f759415e?reconnect=true"
);

pool.query = util.promisify(pool.query);

module.exports = pool;
