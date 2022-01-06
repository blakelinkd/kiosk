import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product-card2',
  templateUrl: './product-card2.component.html',
  styleUrls: ['./product-card2.component.css']
})
export class ProductCard2Component implements OnInit {

  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
