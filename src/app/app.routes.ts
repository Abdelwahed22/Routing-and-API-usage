import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Products } from './component/products/products';
import { Categories } from './component/categories/categories';
import { About } from './component/about/about';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'categories', component: Categories },
  { path: 'about', component: About },
  { path: '**', redirectTo: '/home' }
];
