import express, { Request, Response } from "express";
import { ProductModel, product } from "../../models/Product.model";
import {
    index,
    show,
    create,
    update,
    deletes,
} from "../../controllers/product.controller";
const routes = express.Router();
const productModel = new ProductModel();

routes.get("/", index);

routes.get("/:id", show);

routes.post("/", create);

routes.patch("/:id", update);

routes.delete("/:id", deletes);

export default routes;
