import { Injectable } from '@angular/core';
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private info: string | null = "This is the default info" 
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
    let infoFromLocal = this.getInfo()
    if(infoFromLocal) {
      this.info = infoFromLocal
    }
  }

  public createProduct(product: Product) {
    this.products.push(product)
    this.activeProduct = product
    localStorage.setItem('products', JSON.stringify(this.products))

  }


  public getActiveProduct() {
    return this.activeProduct;
  }

  public findProductByName(target: string) {
    for(let i = 0; i < this.products.length; i++) {
      if(this.products[i].name === target.trim()) {
        console.log('yes')
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
  setInfo(newInfo: string) {
    this.info = newInfo
  }
  getInfo() {
    return localStorage.getItem('info')
  }

  getProducts() {
    return this.products;
  }
}
