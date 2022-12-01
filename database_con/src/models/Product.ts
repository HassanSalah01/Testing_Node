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
    async create(product: product) {
        try {
            const connection = await client.connect();
            const sql = "INSERT INTO product VALUES ($1,$2) Returning *";
            const querry = await connection.query(sql, [
                product.name,
                product.age,
            ]);
            await connection.release();
            return querry.rows[0];
        } catch (error) {
            throw new Error("Coudnt Create Element");
        }
    }
    async delete(id:number) {
        const connection = await client.connect();
        try {
            const connection = await client.connect();
            const sql = "DELETE FROM product WHERE id=$1 RETURNING *";
            const query = await connection.query(sql,[id]);
            await connection.release();
            return query.rows[0];
        } catch (error) {
            throw new Error("No Table Were Found");
        }
        
    }
}