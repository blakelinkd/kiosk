import { Injectable } from '@angular/core';
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private info: string = "This is the default info"
  private products: Array<Product> = new Array<Product>();
  public activeProduct : string | any
  public projectPrototype : Product | any
  constructor() { 
    this.addFakeProducts()
    
  }

  public createProduct(product: Product) {
  }

  
  public getActiveProduct() {
    console.log('called get active product: ' + this.activeProduct)
    return this.activeProduct;
  }

  public findProductByName(target: string) {
    for(let i = 0; i < this.products.length; i++) {
      console.log(`list name: |${ this.products[i].name }| target:|${target.trim()}|`)
      if(this.products[i].name === target.trim()) {
        console.log('yes')
        return this.products[i]
      }
    }
    return -1
  }

  setActiveProduct(target: string) {
    console.log("🚀 ~ file: data.service.ts ~ line 23 ~ DataService ~ setActiveProduct ~ target", target)
    //this.activeProduct = this.findProductByName(target)
    this.activeProduct = target;
    if(!this.activeProduct) {
    console.log("🚀 ~ file: data.service.ts ~ line 26 ~ DataService ~ setActiveProduct ~ activeProduct", this.activeProduct)
      
    }
  }


  addFakeProducts() {
    this.addProduct("cheese ball", "a hard ball of cheese", 22.2, 44, 'assets/images/cappuccino.png')
    this.addProduct("cup of farts", "a hard ball of cheese", 122.2, 44, 'assets/images/cappuccino.png')
    this.addProduct("rock", "a hard ball of cheese", 242.2, 44, 'assets/images/cappuccino.png')
    this.addProduct("stinky", "a hard ball of cheese", 232.2, 44, 'assets/images/cappuccino.png')
    this.setActiveProduct('cheese ball')
  }
  changeInfo(newInfo: string) {
    this.info = newInfo
  }

  addProduct(name: string, description: string, price: number, taxes: number, imgUrl: string) {
    this.products?.push(
      new Product(name, description, price, taxes, imgUrl)
    )
  }
  getProducts() {
    return this.products;
  }
}
