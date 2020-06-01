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
  defaultpath = productImgPath.default;
  productPath = this.defaultpath;
  productToDisplay = 'default';
  constructor() { }

  ngOnInit(): void {
  }
  displayProduct(e) {
    this.productToDisplay = e.target.innerText;
    switch (this.productToDisplay) {
      case 'Candies' : this.productPath = this.candiesImgPath; break;
      case 'Bakery Items' : this.productPath = this.bakeryImgPath; break;
      case 'sweets' : this.productPath = this.sweetsImgPath; break;
      case 'namkeens' : this.productPath = this.namkeensImgPath; break;
      case 'default' : this.productPath = this.defaultpath;
    }
  }

}
