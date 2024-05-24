import { Routes } from '@angular/router';
import { ProductsCatalogComponent } from './pages/products-catalog/products-catalog.component';

import { CreateProductComponent } from './pages/create-product/create-product.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: '', component: ProductsCatalogComponent
    },

    {
        path: 'products-create', component: CreateProductComponent
    }
];
