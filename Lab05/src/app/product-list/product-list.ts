import { Component, input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products = input.required<Product[]>();

  deleteProduct(id: number) {
    const index = this.products().findIndex(p => p.id === id);
    if (index !== -1) {
      this.products().splice(index, 1);
    }
  }
}
