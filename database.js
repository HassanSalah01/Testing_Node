import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { POSTGRES_USER, POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD } =
    process.env;

const client = new Pool({
    user: POSTGRES_USER,
    host: POSTGRES_HOST,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
});
