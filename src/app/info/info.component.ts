import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public info: string | null = 'Default Info'


  constructor(private dataService: DataService){
  }  
  
  ngOnInit(): void {
    this.info = this.dataService.getInfo()
  }

}
