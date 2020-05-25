import { Component, OnInit } from '@angular/core';
import * as cardData from './../../assets/json/card.json';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  cardData = cardData.data;
  constructor() { 
    console.log(this.cardData);
  }

  ngOnInit(): void {
  }

}
