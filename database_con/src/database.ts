import { Pool } from "pg";
import dotenv from "dotenv";
let client;
dotenv.config();

const {
    POSTGRES_USER,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_HOST,
    POSTGRES_PASSWORD,
    ENV,
} = process.env;

if (ENV == "test") {
    client = new Pool({
        host: POSTGRES_HOST,
        password: POSTGRES_PASSWORD,
        user: POSTGRES_TEST_DB,
        database: POSTGRES_USER,
    });
} else {
    client = new Pool({
        host: POSTGRES_HOST,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
    });
}
export default client as Pool;
