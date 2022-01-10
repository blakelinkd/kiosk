import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  public products: Array<Product> = new Array<Product>();
  public activeProduct: Product
  public productPrototype: Product | any
  constructor(private dataService: DataService) {
    this.products = this.dataService.getProducts();
    this.activeProduct = this.products[0]
    this.productPrototype = this.activeProduct

  }

  
  createNewProduct() {
    let product =  new Product("New Product", "Describe the new product", 622.62, 44, 'assets/images/cappuccino.png')
    this.productPrototype = product
    this.dataService.setActiveProduct(product)

  }

  saveNewProduct() {
    this.dataService.createProduct(this.productPrototype)

  }
  getActiveProduct() {
    this.activeProduct = this.dataService.getActiveProduct()
    console.log("🚀 ~ file: products-edit.component.ts ~ line 39 ~ ProductsEditComponent ~ getActiveProduct ~ getActiveProduct", this.activeProduct)
    
    // this.activeProduct = this.dataService.findProductByName(this.dataService.getActiveProduct())
    return this.activeProduct;
  }
  getProducts() {
    return this.products;
  }

  ngOnInit(): void {
  }

}
