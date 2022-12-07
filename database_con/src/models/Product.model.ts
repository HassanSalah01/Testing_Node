import client from "../database";

export type product = {
    id?: number;
    name: string;
    manufacture: string;
    amount: number;
};

export class ProductModel {
    async index() {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM products";
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        } catch (error) {
            throw new Error("No Table Were Found ");
        }
    }

    async show(id: number) {
        try {
            const connection = await client.connect();
            const sql = "SELECT * FROM products WHERE id=($1)";
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error("No Table Were Foundssssss ");
        }
    }
    async create(p: product) {
        try {
            const connection = await client.connect();
            const sql =
                "INSERT INTO products (product_name ,product_amount ,product_manufacture) VALUES ($1,$2,$3) RETURNING *";
            const result = await connection.query(sql, [
                p.name,
                p.amount,
                p.manufacture,
            ]);
            connection.release();
            console.log("earl2112y");
            return result.rows[0];
        } catch (error) {
            throw new Error("Product Is Not Created");
        }
    }
    async update(p: product) {
        try {
            const connection = await client.connect();
            const sql =
                "UPDATE products set product_name=$1 ,product_amount=$2 ,product_manufacture=$3 WHERE id=$4 RETURNING *";
            console.log("welcomne");
            const result = await connection.query(sql, [
                p.name,
                p.amount,
                p.manufacture,
                p.id,
            ]);
            console.log("wlkrewnroen");
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
    async delete(id: number) {
        try {
            console.log("testing delete");
            const connection = await client.connect();
            const sql = "DELETE FROM products WHERE id = ($1) RETURNING *";
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`EROOR Deleting Items ${error}`);
        }
    }
}
