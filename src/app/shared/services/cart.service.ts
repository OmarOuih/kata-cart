import { Injectable, WritableSignal, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems: WritableSignal<Product[]> = signal([]);

  addToCart(product: Product): void {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
        return items;
      }

      return [...items, { ...product, quantity: 1 }];
    });
  }

  removeFromCart(item: Product): void {
    this.cartItems.update((items) => {
      const index = items.indexOf(item);
      if (index === -1) return items;
      return items.toSpliced(index, 1);
    });
  }
}
