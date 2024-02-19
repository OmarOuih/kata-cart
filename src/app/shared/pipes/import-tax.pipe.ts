import { Pipe, PipeTransform } from '@angular/core';
import { calculateImportTax } from '../helpers/calculations.helper';
import { Product } from '../models/product.model';

@Pipe({
  name: 'importTax',
  standalone: true,
})
export class ImportTaxPipe implements PipeTransform {
  transform(product: Product): number {
    return calculateImportTax(product.price, product.isImported);
  }
}
