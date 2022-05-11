// importing the pg libray from node.
// https://node-postgres.com/

const {Pool} = require("pg");

require("dotenv").config();

const devConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const productionConfig = {
  // database url will be coming from heroku add ons
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? productionConfig : devConfig
);

// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

module.exports = {
  query: (text, params) => pool.query(text, params),
};
