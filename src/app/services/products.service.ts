import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyProduct } from '../models/my-product';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = [
    {
      id: 1,
      title:
      "Samsung TV",
      price: 109,
      CategoryID: 'TV',
      isPurchased: false,
      quantity: 4,
      image: 'assets/tv.avif',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 2,
      title:
        'LG TV',
      price: 114,
      CategoryID: 'TV',
      isPurchased: false,
      quantity: 4,
      image: 'assets/tv.avif',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 3,
      title: 'Dell Laptop',
      price: 599,
      CategoryID: 'Laptops',
      isPurchased: false,
      quantity: 4,
      image: 'assets/laptop.webp',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 4,
      title:
        'HP Laptop',
      price: 999.99,
      CategoryID: 'Laptops',
      isPurchased: false,
      quantity: 4,
      image: 'assets/laptop.webp',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 5,
      title: "Iphone",
      price: 56.99,
      CategoryID: 'Mobile Phones',
      isPurchased: false,
      quantity: 4,
      image: 'assets/iphone.png',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 6,
      title:
        "Samsung Phone",
      price: 29.95,
      CategoryID: 'Mobile Phones',
      isPurchased: false,
      quantity: 4,
      image: 'assets/iphone.png',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 7,
      title: 'Dell PC',
      price: 39.99,
      CategoryID: 'PC',
      isPurchased: false,
      quantity: 4,
      image: 'assets/pc.avif',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 8,
      title: "Asus PC",
      price: 9.85,
      CategoryID: 'PC',
      isPurchased: false,
      quantity: 4,
      image: 'assets/pc.avif',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
  ];
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getproductDetails(id: number): Iproduct | undefined {
    return this.products.find((item) => item.id == id);
  }
  getproductByCategory(catid: string) {
    return this.products.filter((item) => item.CategoryID == catid);
  }

  // new//
  getCategories(): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/categories`);
  }

  addProduct(product: MyProduct): Observable<MyProduct> | undefined {
    return this._HttpClient.post<MyProduct>(
      `http://localhost:3000/products`,
      product
    );
  }
  getProducts(): Observable<MyProduct> | undefined {
    return this._HttpClient.get<MyProduct>(`http://localhost:3000/products`);
  }
  updateProduct(product: any): Observable<any> | undefined {
    return this._HttpClient.put<any>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  deleteProduct(id: number): Observable<MyProduct> {
    return this._HttpClient.delete<MyProduct>(
      `http://localhost:3000/products/${id}`
    );
  }
}


