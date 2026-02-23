import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    
    { id: 1, name: 'iPhone 15', description: 'Apple smartphone', price: 600000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=iPhone%2015',
      likes: 0, categoryId: 1 },

    { id: 2, name: 'Samsung Galaxy S24', description: 'Flagship Android', price: 550000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Samsung%20Galaxy%20S24',
      likes: 0, categoryId: 1 },

    { id: 3, name: 'Xiaomi 13T', description: 'Powerful smartphone', price: 300000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Xiaomi%2013T',
      likes: 0, categoryId: 1 },

    { id: 4, name: 'Redmi Note 13', description: 'Budget phone', price: 150000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Redmi%20Note%2013',
      likes: 0, categoryId: 1 },

    { id: 5, name: 'Google Pixel 8', description: 'Pure Android', price: 480000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Pixel%208',
      likes: 0, categoryId: 1 },

    
    { id: 6, name: 'MacBook Air M2', description: 'Apple laptop', price: 800000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=MacBook%20Air',
      likes: 0, categoryId: 2 },

    { id: 7, name: 'ASUS TUF', description: 'Gaming laptop', price: 700000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=ASUS%20TUF',
      likes: 0, categoryId: 2 },

    { id: 8, name: 'Lenovo IdeaPad 5', description: 'Work laptop', price: 400000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Lenovo%20IdeaPad%205',
      likes: 0, categoryId: 2 },

    { id: 9, name: 'HP Pavilion', description: 'Everyday laptop', price: 350000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=HP%20Pavilion',
      likes: 0, categoryId: 2 },

    { id: 10, name: 'Acer Aspire 7', description: 'Performance laptop', price: 460000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Acer%20Aspire%207',
      likes: 0, categoryId: 2 },

    
    { id: 11, name: 'AirPods Pro 2', description: 'Wireless earbuds', price: 140000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=AirPods',
      likes: 0, categoryId: 3 },

    { id: 12, name: 'Sony WH-1000XM5', description: 'Noise cancelling', price: 190000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Sony%20XM5',
      likes: 0, categoryId: 3 },

    { id: 13, name: 'JBL Tune 510BT', description: 'Bluetooth headphones', price: 35000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=JBL%20510BT',
      likes: 0, categoryId: 3 },

    { id: 14, name: 'Marshall Major IV', description: 'Stylish headphones', price: 100000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Marshall%20Major%20IV',
      likes: 0, categoryId: 3 },

    { id: 15, name: 'Xiaomi Buds 4', description: 'Affordable earbuds', price: 40000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Xiaomi%20Buds%204',
      likes: 0, categoryId: 3 },

    
    { id: 16, name: 'iPad 10th Gen', description: 'Apple tablet', price: 350000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=iPad',
      likes: 0, categoryId: 4 },

    { id: 17, name: 'Galaxy Tab S9', description: 'Android tablet', price: 500000, rating: 5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Tab%20S9',
      likes: 0, categoryId: 4 },

    { id: 18, name: 'Xiaomi Pad 6', description: 'Powerful tablet', price: 250000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Xiaomi%20Pad%206',
      likes: 0, categoryId: 4 },

    { id: 19, name: 'Lenovo Tab P12', description: 'Entertainment tablet', price: 200000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=Lenovo%20Tab',
      likes: 0, categoryId: 4 },

    { id: 20, name: 'Huawei MatePad 11', description: 'Smooth display', price: 280000, rating: 4,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz/shop/search/?text=MatePad',
      likes: 0, categoryId: 4 }
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
