import { Pipe, PipeTransform } from '@angular/core';
import {
  calculateImportTax,
  calculateTvaTax,
} from '../helpers/calculations.helper';
import { Product } from '../models/product.model';

@Pipe({
  name: 'priceTTC',
  standalone: true,
})
export class PriceTTCPipe implements PipeTransform {
  transform(product: Product): number {
    const baseTax = calculateTvaTax(product.price, product.category);
    const importTax = calculateImportTax(product.price, product.isImported);
    return product.price + baseTax + importTax;
  }
}
