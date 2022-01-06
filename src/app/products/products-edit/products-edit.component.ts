import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  public products: Array<Product> = new Array<Product>();
  public activeProduct: Product | any
  public lastActiveProduct: Product | any
  // @Output() toggleActiveEvent = new EventEmitter<HTMLInputElement>();
  constructor(private dataService: DataService) {
    this.products = this.dataService.getProducts();
    this.activeProduct = this.products[0]

  }

  setActiveProduct(target: HTMLElement) {
    console.log("🚀 ~ file: products-edit.component.ts ~ line 23 ~ ProductsEditComponent ~ setActiveProduct ~ target", target)
    this.activeProduct = this.products.find(prop => prop.name === target.textContent)
  }
  
  createNewProduct() {
    // create the new product and set it as active
    this.activeProduct = new Product('New Product', 'Update Product Info')
    // this.dataService.createProduct(new Product('New Product', 'Update Product Info'))

  }
  getActiveProduct() {
    this.activeProduct = this.dataService.findProductByName(this.dataService.getActiveProduct())
    //this.dataService.getActiveProduct();
    return this.activeProduct;
  }
  getProducts() {
    return this.products;
  }

  ngOnInit(): void {
    console.log('--- ' + this.products)
  }

}
