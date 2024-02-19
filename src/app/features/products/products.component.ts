import { KeyValuePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductTypeEnum } from '../../shared/enums/product-type.enum';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { ProductService } from '../../shared/services/product.service';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KeyValuePipe, RouterLink, ProductItemComponent],
})
export class ProductsComponent {
  #productService: ProductService = inject(ProductService);
  #cartService: CartService = inject(CartService);

  products: Signal<Product[]> = this.#productService.getProducts();
  filteredProducts: WritableSignal<Product[]> = signal([]);
  cartLength: Signal<number> = computed(
    () => this.#cartService.cartItems().length
  );
  productTypeEnum = ProductTypeEnum;

  constructor() {
    effect(
      () => {
        this.filteredProducts.set(this.products());
      },
      { allowSignalWrites: true }
    );
  }

  onCategoryChange(event: any): void {
    const productType = event.target.value;
    const filteredProducts = this.products().filter(
      (a) => a.category === productType
    );
    this.filteredProducts.set(filteredProducts);
  }
}
