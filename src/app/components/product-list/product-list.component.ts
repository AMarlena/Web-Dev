import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Latest Apple smartphone with A17 chip and titanium design.',
      price: 650000,
      rating: 4.8,
      image: 'https://tse3.mm.bing.net/th/id/OIP.EIQo0yvQI4SwkKQXmnY1oAHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-107363392/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Powerful Android smartphone with excellent camera.',
      price: 580000,
      rating: 4.7,
      image: 'https://tse2.mm.bing.net/th/id/OIP.zwkfXjkd9NNeuTlYlMCxAAHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-107363398/'
    },
    {
  id: 3,
  name: 'MacBook Air M2',
  description: 'Lightweight Apple laptop with M2 chip and long battery life.',
  price: 720000,
  rating: 4.9,
  image: 'https://tse1.mm.bing.net/th/id/OIP.jx99KuTvEpbOOkq8Q5h8BQHaG8?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
  images: [],
  link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8gb-256gb-107363410/'
},
{
  id: 4,
  name: 'Xiaomi 13T Pro',
  description: 'High-performance smartphone with Leica camera system.',
  price: 399000,
  rating: 4.6,
  image: 'https://tse1.mm.bing.net/th/id/OIP.zdfxVIQ40q5Cz0rgABNELQHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
  images: [],
  link: 'https://kaspi.kz/shop/p/xiaomi-13t-pro-256gb-107363420/'
},
{
  id: 5,
  name: 'Sony PlayStation 5',
  description: 'Next-generation gaming console with ultra-fast SSD.',
  price: 450000,
  rating: 4.9,
  image: 'https://tse4.mm.bing.net/th/id/OIP.uJHU0U0tGjzEYgzlUvt63QHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
  images: [],
  link: 'https://kaspi.kz/shop/p/sony-playstation-5-825gb-100746577/'
},
{
  id: 6,
  name: 'Apple Watch Series 9',
  description: 'Advanced smartwatch with health tracking features.',
  price: 280000,
  rating: 4.8,
  image: 'https://th.bing.com/th/id/OIP.QnehJR3UncF8ohMTKkAmRgHaEK?o=7&cb=defcache2&rm=3&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
  images: [],
  link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45mm-107363430/'
},
{
  id: 7,
  name: 'Samsung 55” 4K TV',
  description: 'Ultra HD Smart TV with vibrant colors and HDR support.',
  price: 520000,
  rating: 4.7,
  image: 'https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/g/u/gu43-du7179-uxzg-006-front2-black_q8gxo5eop6rmghut.jpg',
  images: [],
  link: 'https://kaspi.kz/shop/p/samsung-ue55cu8000uxce-55-4k-100780123/'
},
{
  id: 8,
  name: 'Lenovo IdeaPad 3',
  description: 'Affordable laptop for study and everyday tasks.',
  price: 310000,
  rating: 4.5,
  image: 'https://i0.wp.com/laptopmedia.com/wp-content/uploads/2020/02/1-16-e1581429829861.jpg?fit=842%2C580&ssl=1',
  images: [],
  link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-100802345/'
},
{
  id: 9,
  name: 'AirPods Pro 2',
  description: 'Wireless earbuds with active noise cancellation.',
  price: 150000,
  rating: 4.8,
  image: 'https://th.bing.com/th/id/OIP.JfiZrRQPI2uxXG2zi0nRCgHaHa?o=7&cb=defcache2&rm=3&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
  images: [],
  link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-nd-generation-107363440/'
},
{
  id: 10,
  name: 'Dyson V15 Vacuum Cleaner',
  description: 'Powerful cordless vacuum cleaner with laser detection.',
  price: 430000,
  rating: 4.9,
  image: 'https://tse3.mm.bing.net/th/id/OIP.9dFosVKMIn1n4f_mFtX-NAHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3',
  images: [],
  link: 'https://kaspi.kz/shop/p/dyson-v15-detect-100912345/'
}

  ];
share(product: Product) {
  const url = encodeURIComponent(product.link);
  const text = encodeURIComponent(product.name);

  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
}

}
