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
  toggleActiveProduct(target: Product) {
    this.dataService.setActiveProduct(target);
    this.activeProduct = this.dataService.getActiveProduct();
  }

  isActive(target: Product) {
    if(target.name === this.dataService.getActiveProduct().name) {
      
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit(): void {
  }

}
