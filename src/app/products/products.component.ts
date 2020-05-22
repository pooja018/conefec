import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  topic = 'Shop Our Products';
  shopByCategory ='Shop by category';
  products = ['Candies', 'Bakery Items', 'sweets', 'namkeens']
  constructor() { }

  ngOnInit(): void {
  }

}
