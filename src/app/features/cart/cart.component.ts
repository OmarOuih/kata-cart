import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { CartItemComponent } from './car-item/cart-item.component';
import { CartTotalComponent } from './car-total/cart-total.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, CartItemComponent, CartTotalComponent],
})
export class CartComponent {
  #cartService: CartService = inject(CartService);

  cartItems: WritableSignal<Product[]> = this.#cartService.cartItems;
}
