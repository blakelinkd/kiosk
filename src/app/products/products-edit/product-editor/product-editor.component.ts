import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Product } from '../../../Models/Product'
@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  @Input() product: Product | any
  constructor(private dataService: DataService) { }


  saveNewProduct() {
    this.dataService.createProduct(
      this.dataService.activeProduct
    )

  }

  deleteProduct() {
    this.dataService.deleteProduct(
      this.dataService.activeProduct
    )
  }
  ngOnInit(): void {
  }

}
