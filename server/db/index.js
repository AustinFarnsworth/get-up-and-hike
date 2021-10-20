// importing the pg libray from node.
// https://node-postgres.com/

const {Pool} = require("pg");

require("dotenv").config();

const USER = process.env.PGUSER;
const HOST = process.env.PGHOST;
const DATABASE = process.env.PGDATABASE;
const PASSWORD = process.env.PGPASSWORD;
const PORT = process.env.PGPORT;

const pool = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
