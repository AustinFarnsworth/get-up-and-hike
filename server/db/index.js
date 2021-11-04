// importing the pg libray from node.
// https://node-postgres.com/

const {Pool} = require("pg");

require("dotenv").config();

const devConvfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const productionConfig = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? productionConfig : devConvfig
);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
