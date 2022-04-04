import { Product } from '../dto/Product';
import type { ProductType } from '../dto/types';
import store from '@/store';

export class CalculatorService {
    productList: Product[];
    constructor(products: ProductType[]) {
        this.productList = products.map(product => new Product(product));
    }

    get totalSum(): number {
        return this.productList.reduce((acc, curr) =>  acc += curr.sum, 0);
    }

    addProduct(product: ProductType): void {
        store.commit('addProduct', new Product(product));
    }

    deleteProducts(productIds: number[]): void {
        const products = this.productList.filter((_, index) => !productIds.includes(index));
        store.commit('setProducts', products);
    }
}