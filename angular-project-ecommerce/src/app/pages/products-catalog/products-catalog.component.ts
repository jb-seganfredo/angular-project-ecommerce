import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { IProduct } from '../../interfaces/product';


@Component({
  selector: 'app-products-catalog',
  standalone: true,
  imports: [ ProductCardComponent, NgFor, NgIf ],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.css'
})

export class ProductsCatalogComponent implements OnInit {

  @Output() addProductToCart: EventEmitter<IProduct> = new EventEmitter();

  productsList: IProduct[] = [ ];

  ngOnInit() {
    this.productsList = JSON.parse(localStorage.getItem("productsList") || "[]")
  }

  warnAboutAddProductToCart(product: IProduct){

    this.addProductToCart.emit(product);
  }
}
