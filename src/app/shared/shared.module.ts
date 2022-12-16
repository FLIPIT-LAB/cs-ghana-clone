import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DevelopFriendlyComponent } from './develop-friendly/develop-friendly.component';
import { RouterModule } from '@angular/router';

const components = [
  CreateAccountComponent,
  DevelopFriendlyComponent,
  FooterComponent,
  HeaderComponent,
  ProductsComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [components]
})
export class SharedModule { }
