import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../app/header/header.component';
import { ProductComponent } from '../app/product/product.component';
import { ContactComponent } from '../app/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
