import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-catalog',
  standalone: true,
  imports: [NgFor, NgIf, ProductCardComponent],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.css'
})
export class ProductsCatalogComponent implements OnInit {

  @Output() addProductToCart: EventEmitter<IProduct> = new EventEmitter();

  teste: string = 'ABC';

  productsList: IProduct[] = [];

  ngOnInit() {
    this.productsList = JSON.parse(localStorage.getItem("productsList") || "[]")
  }

  warnAboutAddProductToCart(product: IProduct){
    console.log("Opa, clicou no botão de compra, né filhão?");
    console.log(product);

    this.addProductToCart.emit(product);
  }
}