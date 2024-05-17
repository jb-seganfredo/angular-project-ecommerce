import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsCatalogComponent } from './pages/products-catalog/products-catalog.component';
import { LoginComponent } from './pages/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductCardComponent, ProductsCatalogComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project-ecommerce';

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
