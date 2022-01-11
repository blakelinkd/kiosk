import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Models/Product';
import { ProductCardComponent } from '../product-card/product-card.component';
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
        
        getProducts() {
          return this.dataService.getProducts()
          
        }
        
        ngOnInit(): void {
          this.products = this.dataService.getProducts();
          this.activeProduct = this.dataService.getActiveProduct();
          
  }

}
