import pg from "pg";

//Pool is extracting the credenmtials from the .env file
const pool = new pg.pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
    return pool.query(text, params, callback);
  }