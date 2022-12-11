import { Request, Response } from "express";
import { ProductModel, product } from "../models/Product.model";

const productModel = new ProductModel();

export const index = async (_req: Request, res: Response) => {
    try {
        const allProduct = await productModel.index();
        res.send(allProduct);
    } catch (error) {
        res.status(400);
        throw new Error(`${error}`);
    }
};
export const show = async (req: Request, res: Response) => {
    try {
        const result = await productModel.show(
            req.params.id as unknown as number
        );
        res.send(result);
    } catch (error) {
        res.status(400);
        throw new Error(error as string);
    }
};
export const create = async (req: Request, res: Response) => {
    try {
        const test: product = {
            name: req.body.name,
            amount: parseInt(req.body.amount),
            manufacture: req.body.manufacture,
        };

        const result = await productModel.create(test);
        res.json(result);
    } catch (error) {
        res.status(400);
        throw new Error(`${error}`);
    }
};
export const update = async (req: Request, res: Response) => {
    try {
        const data = {
            name: req.body.name,
            manufacture: req.body.manufacture,
            amount: parseInt(req.body.amount),
            id: parseInt(req.params.id),
        };
        const dataUpdated = await productModel.update(data);
        res.send(dataUpdated);
    } catch (error) {
        res.status(400);
        throw new Error(`${error}`);
    }
};
export const deletes = async (req: Request, res: Response) => {
    try {
        const data = await productModel.delete(parseInt(req.params.id));
        res.send(data);
    } catch (error) {
        res.status(400);
        throw new Error(`${error}+132`);
    }
};
