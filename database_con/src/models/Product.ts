import client from "../database";

export type product = {
    name: string;
    id?: number;
    age: number;
};

export class Product {
    async index() {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM product ";
            const query = await connection.query(sql);
            await connection.release();
            return query.rows;
        } catch (error) {
            throw new Error("No Table Were Found");
        }
    }
}
