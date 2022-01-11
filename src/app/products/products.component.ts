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


  public products: Array<Product> | undefined
  public activeProduct: Product | undefined

  constructor(private dataService: DataService) {
  }
  
  // removeProduct(name: string) {
    
    //   this.products.forEach( ( product, index) => {
      //     if( product.name === name) {
        //       this.products.splice(index, 1)
        //     }
        //   })
        // }
        
        getProducts() {
          return this.dataService.getProducts()
          
        }
        
        ngOnInit(): void {
          this.products = this.dataService.getProducts();
          this.activeProduct = this.dataService.getActiveProduct();
          
  }

}
