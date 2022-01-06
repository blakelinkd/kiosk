import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module'
import { InfoComponent } from './info/info.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { InfoEditComponent } from './info/info-edit/info-edit.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { HeaderComponent } from './header/header.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { ProductCard2Component } from './product-card2/product-card2.component';
import { ProductsListElementComponent } from './products/products-edit/products-list-element/products-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MyCounterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    InfoComponent,
    ProductCardComponent,
    InfoEditComponent,
    ProductsEditComponent,
    HeaderComponent,
    HeroesComponent,
    ProductCard2Component,
    ProductsListElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
