import { user, UserModel } from "../../models/user.model";
import { Request, Response, Router } from "express";

const routes = Router();
const userModel = new UserModel();

routes.get("/", async (_req: Request, res: Response) => {
    try {
        console.log("hello");
        const result = await userModel.index();
        res.send(result);
    } catch (error) {
        throw new Error(`${error}`);
    }
});
routes.get("/:id", async (req: Request, res: Response) => {
    try {
        const result = await userModel.show(req.params.id as unknown as number);
        res.send(result);
    } catch (error) {
        res.status(400);
        throw new Error(error as string);
    }
});

routes.post("/", async (req: Request, res: Response) => {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password,
        };
        console.log(user);
        const result = await userModel.create(user);
        res.send(result);
    } catch (error) {
        throw new Error(`${error}`);
    }
});
routes.patch("/:id", async (req: Request, res: Response) => {
    try {
        const data = {
            username: req.body.username,
            password: req.body.password,
            id: parseInt(req.params.id),
        };
        console.log(data);
        const dataUpdated = await userModel.update(data);
        res.send(dataUpdated);
    } catch (error) {
        res.status(400);
        throw new Error(`${error}`);
    }
});

routes.delete("/:id", async (req: Request, res: Response) => {
    try {
        const data = await userModel.delete(parseInt(req.params.id));
        res.send(data);
    } catch (error) {
        res.status(400);
        throw new Error(`${error}+132`);
    }
});
export default routes;
