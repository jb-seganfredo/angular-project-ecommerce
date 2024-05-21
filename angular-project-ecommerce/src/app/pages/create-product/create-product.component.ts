import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {

  productsList: IProduct[] = [];

  newProduct: IProduct = {
    "id": 1,
    "title": "Product Name",
    "description": "Description of the product.",
    "price": 130.99,
    "totalInStock": 20,
    "totalAddedToCart": 0,
    "imageUrl": "https://static.thcdn.com/images/medium/original/widgets/95-en/12/original-SHOT_07_GB_LE_137_Mobile-094212.jpg"
  };

  ngOnInit() {
    this.productsList = JSON.parse(localStorage.getItem("productsList") || "[]")
  }

submitForm() {
    this.productsList.push(this.newProduct);
    localStorage.setItem("productsList", JSON.stringify(this.productsList));
  }
}
