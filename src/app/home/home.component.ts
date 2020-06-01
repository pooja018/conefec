import { Component, OnInit } from '@angular/core';
import * as content from '../../assets/json/about.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 content;
  constructor() {
    this.content = content.content;
   }

  ngOnInit(): void {
    console.log('bbbxc ',this.content[0]);
  }

}
