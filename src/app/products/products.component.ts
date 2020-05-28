import { Component, OnInit } from '@angular/core';
import * as productImgPath from '../../assets/json/candiesImgPath.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  topic = 'Shop Our Products';
  shopByCategory = 'Shop by category';
  products = ['Candies', 'Bakery Items', 'sweets', 'namkeens'];
  candiesImgPath = productImgPath.candies;
  bakeryImgPath = productImgPath.bakery;
  sweetsImgPath = productImgPath.sweets;
  namkeensImgPath = productImgPath.namkeens;
  productToDisplay: string;
  constructor() { }

  ngOnInit(): void {
  }
  displayProduct(e) {
    this.productToDisplay = e.target.innerText;
    console.log(this.productToDisplay)
    console.log(this.productToDisplay === 'Bakery Items')
  }

}
