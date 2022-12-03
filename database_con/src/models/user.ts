import client from "../database";

type product = {
    id?: number;
    name: string;
    manufacture: string;
    amount: number;
};

class Product {
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

    async create(p: product) {
        try {
            const connection = await client.connect();
            const sql =
                "INSERT INTO products (name ,manufacture,amount) VALUES($1,$2,$3) RETURNING *";
            const result = await connection.query(sql, [
                p.name,
                p.manufacture,
                p.amount,
            ]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error("Product Is Not Created");
        }
    }
    async update(p: product) {
        try {
            const connection = await client.connect();
            const sql =
                "UPDATE products set name = $1, munufacture=$2,amount=$3 WHERE id = $4 RETURNING *";
            const result = await connection.query(sql, [
                p.name,
                p.manufacture,
                p.amount,
                p.id,
            ]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error("Product Is Not Created");
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
