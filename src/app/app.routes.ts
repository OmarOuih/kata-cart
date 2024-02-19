import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products.component').then(
        ({ ProductsComponent }) => ProductsComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.component').then(
        ({ CartComponent }) => CartComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
