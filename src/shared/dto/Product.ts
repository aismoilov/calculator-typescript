import type { ProductType } from "./types";

export class Product {
    name: string;
    price: number;
    quantity: number;
    constructor(product: ProductType) {
        this.name = product.name;
        this.price = product.price;
        this.quantity = product.quantity;
    }

    get sum(): number {
        return this.quantity * this.price;
    }
}