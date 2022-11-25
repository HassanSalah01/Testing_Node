import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
let client;

const {
    POSTGRES_USER,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_HOST,
    POSTGRES_PASSWORD,
    ENV,
} = process.env;

if (ENV == "dev") {
    client = new Pool({
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        host: POSTGRES_HOST,
        password: POSTGRES_PASSWORD,
        port: 5432,
    });
} else {
    client = new Pool({
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        host: POSTGRES_HOST,
        password: POSTGRES_PASSWORD,
        port: 5432,
    });
}
export default client;
