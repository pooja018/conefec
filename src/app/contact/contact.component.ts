import { Component, OnInit } from '@angular/core';
import * as cardData from './../../assets/json/card.json';
import { GoogleMap } from '../../models/googleMap.model';
import { ApplicationConstant } from '../../models/ApplicationConstant.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  public googleMap = new GoogleMap();
  public ApplicationConstant = new ApplicationConstant();
  public cardData = cardData.data;

  constructor() {
    console.log(this.cardData);
  }

  ngOnInit(): void {
    this.googleMap.latitude = this.ApplicationConstant.latitute;
    this.googleMap.longitude = this.ApplicationConstant.longitutde;
    this.googleMap.zoom = this.ApplicationConstant.zoom;
  }

}
