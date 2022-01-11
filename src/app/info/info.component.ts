import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { DataService } from '../data.service';
import { Info } from '../Models/Info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  public info: Info | any

  constructor(private dataService: DataService){
  }  
  
  ngOnInit(): void {
    this.info = this.dataService.getInfo()
    console.log(`info: ${ this.info }`)
  }

}
