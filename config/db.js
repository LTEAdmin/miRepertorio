import pg from "pg";
import "dotenv/config";

const { DB_PASSWORD, DB_USER, DB_HOST, DB_DATABASE, DB_PORT } = process.env;
const config = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
  allowExitOnIdle: true, //cierre automatico
};
const dbase = new pg.Pool(config);

export default dbase