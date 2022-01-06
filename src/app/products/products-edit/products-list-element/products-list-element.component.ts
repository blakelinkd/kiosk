import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-products-list-element',
  templateUrl: './products-list-element.component.html',
  styleUrls: ['./products-list-element.component.css']
})
export class ProductsListElementComponent implements OnInit {

  @Input() public product: Product | any
  @Input() activeProduct: Product | any

  constructor(private dataService: DataService) { 
  }
  toggleActiveProduct(target: HTMLElement | any) {
    this.dataService.setActiveProduct(target.textContent);
    this.activeProduct = this.dataService.getActiveProduct();
    // this.toggleActiveEvent.emit(target);
  }

  ngDoCheck() {
    console.log('===active product===' + this.activeProduct)
    
  }
  isActive(target: HTMLElement) {
    console.log('isActive: ' + target.textContent)
    console.log(`---------------------> target: ${target.textContent} === data: ${this.dataService.getActiveProduct().name}`)
    if(target.textContent === this.dataService.getActiveProduct()) {
      
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit(): void {
    console.log(this.product)
  }

}
