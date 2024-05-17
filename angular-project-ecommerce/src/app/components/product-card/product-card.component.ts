import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product?: IProduct;
  @Input() teste?: string;
  @Output() addProductToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  
  addedProductsList: IProduct[] = [];

  ngOnInit() {
    this.addedProductsList = JSON.parse(localStorage.getItem("addedProductsList") || "[]");
  }

    findOrAddProduct(product?: IProduct) {
    for (let i=0; i<this.addedProductsList.length; i++) { 

      if (product?._id === this.addedProductsList[i]._id) 
        {
        this.addedProductsList[i].totalAddedToCart = (product.totalAddedToCart < product.totalInStock)? this.addedProductsList[i].totalAddedToCart +1 : this.addedProductsList[i].totalAddedToCart;
        return;
      } 
    }

    if (product){
      product.totalAddedToCart = 1;
      this.addedProductsList.push(product);
    }
  }

  addToShoppingCart() {
    this.addProductToCart.emit();

    this.findOrAddProduct(this.product)

    localStorage.setItem("addedProductsList", JSON.stringify(this.addedProductsList));
  }
}

