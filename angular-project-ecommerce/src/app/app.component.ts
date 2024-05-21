import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsCatalogComponent } from './pages/products-catalog/products-catalog.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { IProduct } from './interfaces/product.interface';
import { FooterComponent } from './components/footer/footer.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductCardComponent, ProductsCatalogComponent, ProductCartComponent, FooterComponent, CreateProductComponent, LoginComponent, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'BRAND';
  addedProductsList: IProduct[] = [];

  ngOnInit() {
    this.addedProductsList = JSON.parse(localStorage.getItem("addedProductsList") || "[]");
  }

  findOrAddProduct(product: IProduct) {
    for (let i=0; i<this.addedProductsList.length; i++) { 
      if (product.id === this.addedProductsList[i].id) 
        {
        this.addedProductsList[i].totalAddedToCart = (product.totalAddedToCart < product.totalInStock)? this.addedProductsList[i].totalAddedToCart +1 : this.addedProductsList[i].totalAddedToCart;
        return;
      } 
    }
    
    product.totalAddedToCart = 1;
    this.addedProductsList.push(product);
  }

  addProductToCart(product: IProduct) {
    this.findOrAddProduct(product);

    this.addedProductsList = [...this.addedProductsList]; 

    console.log(this.addedProductsList);
    this.toggleOffcanvas(true);
  }

  toggleOffcanvas(open: boolean) {
    const offcanvasElement = document.getElementById('offcanvasExample');
    if (offcanvasElement) {
      if (open) {
        offcanvasElement.classList.add('show');
      } else {
        offcanvasElement.classList.remove('show');
      }
      } else {
        console.error('Offcanvas element not found!');
    }
  }
}