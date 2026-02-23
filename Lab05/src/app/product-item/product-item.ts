import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {

  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  remove() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product().id);
    }
  }

  shareWhatsApp() {
    window.open(`https://wa.me/?text=${this.product().link}`);
  }

  shareTelegram() {
    window.open(`https://t.me/share/url?url=${this.product().link}`);
  }



}
