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

  teste: string = 'ABC';

  productsList: IProduct[] = [
    {
      _id: '1',
      title: 'Product 1',
      description: 'Description of product 1',
      price: 10.99,
      totalInStock: 10,
      totalAddedToCart: 0,
      imageUrl: 'https://via.placeholder.com/150'
    },
  ];

  ngOnInit() {
    this.productsList = JSON.parse(localStorage.getItem("productsList") || "[]")
  }

  warnAboutAddProductToCart(product: IProduct){
    console.log("Opa, clicou no botão de compra, né filhão?");
    console.log(product);

    this.addProductToCart.emit(product);
  }
}
