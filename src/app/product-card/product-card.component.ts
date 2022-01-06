import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log('product-card: ' + this.product);

  }

}
