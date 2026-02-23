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
    image: 'https://tse2.mm.bing.net/th/id/OIP.2s-eXLfLQuXgwWMJAFVl2AHaEJ?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3' , link: 'https://kaspi.kz/',
    likes: 0, categoryId: 1},

  { id: 2, name: 'Samsung Galaxy S24', description: 'Android flagship', price: 550000, rating: 5,
    image: 'https://tse1.mm.bing.net/th/id/OIP.kIuX11jfr2DXpiGLy4f-AgHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 1 },

  { id: 3, name: 'Xiaomi 13T', description: 'Powerful phone', price: 300000, rating: 4,
    image: 'https://tse1.mm.bing.net/th/id/OIP.mtxUMs8U6uYOQKT_W1lHwgHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 1 },

  { id: 4, name: 'Redmi Note 13', description: 'Budget phone', price: 150000, rating: 4,
    image: 'https://tse4.mm.bing.net/th/id/OIP.e4CI7XZfTNT8hnOcmMKcZQHaD1?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 1 },

  { id: 5, name: 'Google Pixel 8', description: 'Pure Android', price: 480000, rating: 5,
    image: 'https://tse4.mm.bing.net/th/id/OIP.siBWl_WUNeBaPgC3M-iv5AHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 1 },


  { id: 6, name: 'MacBook Air M2', description: 'Apple laptop', price: 800000, rating: 5,
    image: 'https://tse1.mm.bing.net/th/id/OIP.I4l8I_2-rSgTn4b_a2lO_QHaD0?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 2 },

  { id: 7, name: 'ASUS TUF', description: 'Gaming laptop', price: 700000, rating: 5,
    image: 'https://tse4.mm.bing.net/th/id/OIP.T5tDCIeVppRRZtBGlJ1XLAHaE8?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 2 },

  { id: 8, name: 'Lenovo IdeaPad 5', description: 'Work laptop', price: 400000, rating: 4,
    image: 'https://tse4.mm.bing.net/th/id/OIP.nD_JUtlgWfXuS_sOqIHuXAHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 2 },

  { id: 9, name: 'HP Pavilion', description: 'Everyday laptop', price: 350000, rating: 4,
    image: 'https://www.notebookcheck.com/fileadmin/_processed_/3/8/csm_HP-Pavilion-16-7_7a72b404c9.jpg', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 2 },

  { id: 10, name: 'Acer Aspire 7', description: 'Performance laptop', price: 460000, rating: 4,
    image: 'https://tse2.mm.bing.net/th/id/OIP.XoDs45aNsmNbSRcuQtsT-AHaEl?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 2 },


  { id: 11, name: 'AirPods Pro 2', description: 'Wireless earbuds', price: 140000, rating: 5,
    image: 'https://tse1.mm.bing.net/th/id/OIP.3zDWWlhSZ1F76JZ7QXeKmAHaEB?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 3 },

  { id: 12, name: 'Sony WH-1000XM5', description: 'Noise cancelling', price: 190000, rating: 5,
    image: 'https://tse4.mm.bing.net/th/id/OIP.OyDkaG1nOKJv--fWEMAriAHaEw?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 3 },

  { id: 13, name: 'JBL Tune 510BT', description: 'Bluetooth headphones', price: 35000, rating: 4,
    image: 'https://tse4.mm.bing.net/th/id/OIP.Ue7gB2LJVOmmEsma-87WCQHaGE?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 3 },

  { id: 14, name: 'Marshall Major IV', description: 'Stylish headphones', price: 100000, rating: 5,
    image: 'https://tse4.mm.bing.net/th/id/OIP.W_Fl5IQrw0uP9gtbVziTJgHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 3 },

  { id: 15, name: 'Xiaomi Buds 4', description: 'Affordable earbuds', price: 40000, rating: 4,
    image: 'https://tse1.mm.bing.net/th/id/OIP.0BgkGt3rELiWPMzDBWwzQQHaDw?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 3 },

  
  { id: 16, name: 'iPad 10th Gen', description: 'Apple tablet', price: 350000, rating: 5,
    image: 'https://tse2.mm.bing.net/th/id/OIP.MxPuCNpEJZCTWMsAuII3tQHaDt?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 4 },

  { id: 17, name: 'Galaxy Tab S9', description: 'Android tablet', price: 500000, rating: 5,
    image: 'https://tse3.mm.bing.net/th/id/OIP.ceDEyqbyAHkWTY63txnJWgHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 4 },

  { id: 18, name: 'Xiaomi Pad 6', description: 'Powerful tablet', price: 250000, rating: 4,
    image: 'https://tse4.mm.bing.net/th/id/OIP.Ej99kusE1bKtGu703otMJgHaGG?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 4 },

  { id: 19, name: 'Lenovo Tab P12', description: 'Entertainment tablet', price: 200000, rating: 4,
    image: 'https://tse4.mm.bing.net/th/id/OIP.bSXQ0vFURBYawcw9qvGkeAHaF8?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 4 },

  { id: 20, name: 'Huawei MatePad 11', description: 'Smooth display', price: 280000, rating: 4,
    image: 'https://tse3.mm.bing.net/th/id/OIP.7XOlx-ezy2o0mFTawqMwZAHaDt?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3', link: 'https://kaspi.kz/',
    likes: 0, categoryId: 4 }
];


  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(
      product => product.categoryId === categoryId
    );
  }
}
