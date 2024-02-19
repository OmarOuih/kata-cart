import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  computed,
  input,
} from '@angular/core';
import {
  calculateImportTax,
  calculateTvaTax,
} from '../../../shared/helpers/calculations.helper';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
})
export class CartTotalComponent {
  items: InputSignal<Product[]> = input.required<Product[]>();
  totalTaxes = computed(() =>
    this.items().reduce((totalTaxes, product) => {
      const baseTax = calculateTvaTax(product.price, product.category);
      const importTax = calculateImportTax(product.price, product.isImported);
      return totalTaxes + baseTax + importTax;
    }, 0)
  );
  totalTTC = computed(() => {
    return (
      this.items().reduce((totalHT, product) => totalHT + product.price, 0) +
      this.totalTaxes()
    );
  });
}
