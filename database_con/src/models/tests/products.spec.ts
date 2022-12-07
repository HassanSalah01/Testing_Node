import { Product, product } from "../Product.model";

const store = new Product();

describe("Book Model", () => {
    it("should have an index method", () => {
        expect(store.index).toBeDefined();
    });
});
