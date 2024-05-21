import { Routes } from '@angular/router';
import { ProductsCatalogComponent } from './pages/products-catalog/products-catalog.component';

import { CreateProductComponent } from './pages/create-product/create-product.component';


export const routes: Routes = [
    {
        path: '', component: ProductsCatalogComponent
    },

    {
        path: 'products-create', component: CreateProductComponent
    }
];
