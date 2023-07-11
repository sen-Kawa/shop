import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const id = Math.random().toString();
    const newProduct = new Product(id, title, description, price);
    this.products.push(newProduct);
    return id;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(id: string) {
    const product = this.products.find((prod) => prod.id === id);
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return { ...product };
  }
}
