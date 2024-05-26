import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})

export class ProductCartComponent implements OnInit {

  @Output() toggleOffcanvas = new EventEmitter<boolean>();

  @Input("productsList") addedProductsList: IProduct[] = [];

  ngOnInit() {
    console.log(this.addedProductsList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    localStorage.setItem('addedProductsList', JSON.stringify(this.addedProductsList));
  }

  emitToggleOffcanvas(open: boolean) {
    this.toggleOffcanvas.emit(open);
  }
 
  removeProductFromCart(product: IProduct) {
    const productIndex = this.addedProductsList.findIndex((currProduct) => {
      return currProduct.id === product.id;
    });
  this.addedProductsList.splice(productIndex, 1);
  }
  
  decrementTotalProduct(product: IProduct) {
    product.totalAddedToCart--;

    if(product.totalAddedToCart <= 0) {
      this.removeProductFromCart(product);
  }
  localStorage.setItem('addedProductsList', JSON.stringify(this.addedProductsList));
  }

  incrementTotalProduct(product: IProduct) {
    product.totalAddedToCart++;

    if(product.totalAddedToCart > product.totalInStock) {
      product.totalAddedToCart = product.totalInStock;
    }
    localStorage.setItem('addedProductsList', JSON.stringify(this.addedProductsList));
  }
}
