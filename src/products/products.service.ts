import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const newProduct = new Product(
      new Date().toString(),
      title,
      description,
      price,
    );
    this.products.push(newProduct);
  }
}
