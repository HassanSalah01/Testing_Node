import client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

export type user = {
    id?: number;
    username: string;
    password: string;
};

export class UserModel {
    async index() {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM users";
            const result = await connection.query(sql);
            await connection.release;
            return result.rows;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
    async show(id: number) {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM users WHERE id=($1)";
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error("No Table Were Foundssssss ");
        }
    }

    async create(u: user) {
        try {
            const connection = await client.connect();
            const sql =
                "INSERT INTO users (username , password ) VALUES ($1,$2) RETURNING * ";
            const hash = bcrypt.hashSync(
                u.password + BCRYPT_PASSWORD,
                parseInt(SALT_ROUNDS as string)
            );
            const result = await connection.query(sql, [u.username, hash]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
    async update(u: user) {
        try {
            const connection = await client.connect();
            const sql =
                "UPDATE users SET username=$1 ,password=$2  WHERE id=$3 RETURNING *";
            const result = await connection.query(sql, [
                u.username,
                u.password,
                u.id,
            ]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
    async delete(id: number) {
        try {
            const connection = await client.connect();
            const sql = "DELETE FROM users WHERE id = ($1) RETURNING *";
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`EROOR Deleting Items ${error}`);
        }
    }
}
