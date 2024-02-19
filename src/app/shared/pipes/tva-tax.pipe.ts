import { Pipe, PipeTransform } from '@angular/core';
import { calculateTvaTax } from '../helpers/calculations.helper';
import { Product } from '../models/product.model';

@Pipe({
  name: 'tvaTax',
  standalone: true,
})
export class TvaTaxPipe implements PipeTransform {
  transform(product: Product): number {
    return calculateTvaTax(product.price, product.category);
  }
}
