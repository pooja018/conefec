import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    ProductsComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyB3SgXq5RcTMULpst9xuxTgXdvuTPv_zGc'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
