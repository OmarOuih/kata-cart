import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ImportTaxPipe } from '../../../shared/pipes/import-tax.pipe';
import { TvaTaxPipe } from '../../../shared/pipes/tva-tax.pipe';
import { PriceTTCPipe } from '../../../shared/pipes/price-ttc.pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ImportTaxPipe, TvaTaxPipe, PriceTTCPipe, CurrencyPipe],
})
export class CartItemComponent {
  #cartService: CartService = inject(CartService);

  item: InputSignal<Product> = input.required<Product>();

  removeFromCart(item: Product): void {
    this.#cartService.removeFromCart(item);
  }
}
