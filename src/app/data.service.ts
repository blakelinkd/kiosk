import { Injectable } from '@angular/core';
import { Info } from './Models/Info';
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private info: Info = new Info("Default Heading", "Default Content")

  private products: Array<Product> = new Array<Product>();
  public activeProduct : Product
  public projectPrototype : Product | any
  constructor() { 
    
    let productsFromLocal = localStorage.getItem('products')
    if(productsFromLocal) {
      this.products = JSON.parse(productsFromLocal)
    }
    else {
      this.addFakeProducts()
    }
    this.activeProduct = this.products[0];
  }

  public createProduct(product: Product | any) {
    let newList = this.products.filter( (newProduct) => newProduct.name !== product.name )
    newList.push(product)
    this.products = newList
    this.activeProduct = product
    localStorage.setItem('products', JSON.stringify(this.products))

  }

  public getActiveProduct() {
    return this.activeProduct;
  }

  public findProductByName(target: string) {
    for(let i = 0; i < this.products.length; i++) {
      if(this.products[i].name === target.trim()) {
        return this.products[i]
      }
    }
    return -1
  }

  setActiveProduct(target: Product) {
    //this.activeProduct = this.findProductByName(target)
    this.activeProduct = target
  }

  addFakeProducts() {
    this.products?.push( new Product("Large Coffee", "A large coffee with no cream or sugar.", 2.24, 44, 'assets/images/cappuccino.png'))
    this.products?.push( new Product("Cappucinno", "a jizz of frothy cream floating on the top", 622.62, 44, 'assets/images/cappuccino.png'))
    this.products?.push( new Product("Fruity Energy Drink", "Taste like red bull with aspirin in it.", 122.2, 44, 'assets/images/cappuccino.png'))
  }

  setInfo(newInfo: Info) {
    this.info = newInfo
  }
  getInfo() {
    return this.info
    // return localStorage.getItem('info')
  }

  getProducts() {
    let sorted = this.products.sort( (a, b) => { 
      return a['name'] === b['name']? 0 : a['name'] > b['name'] ? 1 : -1
     } )
     return sorted.filter((prod) => prod.name !== 'New Product' )
    // return this.products;
  }
}
