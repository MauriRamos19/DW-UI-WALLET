import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { ServiceCategoryComponent } from './components/service-category/service-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreditCardComponent,
    ServiceCategoryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
