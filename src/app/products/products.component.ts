import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Models/Product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCard2Component } from '../product-card2/product-card2.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public products: Array<Product> = new Array<Product>()
  public activeProduct: Product | undefined

  constructor(private dataService: DataService) {
    this.products = this.dataService.getProducts();
    this.activeProduct = this.dataService.getActiveProduct(); 
  }


  // addProduct(name: string, description: string, price: number, taxes: number, imgUrl: string) {
  //   this.products?.push(
  //     new Product(name, description, price, taxes, imgUrl)
  //   )
  // }

  removeProduct(name: string) {

    this.products.forEach( ( product, index) => {
      if( product.name === name) {
        this.products.splice(index, 1)
      }
    })
  
  }


  getProducts() {
    if(this.products) {
      return this.products
    }
    return null
  }


  ngOnInit(): void {
    // this.addProduct("cheese ball", "a hard ball of cheese", 22.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("cup of farts", "a hard ball of cheese", 122.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("rock", "a hard ball of cheese", 242.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("stinky", "a hard ball of cheese", 232.2, 44, 'assets/images/cappuccino.png')

    // this.addProduct("cheese ball", "a hard ball of cheese", 22.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("cup of farts", "a hard ball of cheese", 122.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("rock", "a hard ball of cheese", 242.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("stinky", "a hard ball of cheese", 232.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("cheese ball", "a hard ball of cheese", 22.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("cup of farts", "a hard ball of cheese", 122.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("rock", "a hard ball of cheese", 242.2, 44, 'assets/images/cappuccino.png')
    // this.addProduct("stinky", "a hard ball of cheese", 232.2, 44, 'assets/images/cappuccino.png')

    // this.removeProduct("stinky")

  }

}
