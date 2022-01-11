import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Info } from 'src/app/Models/Info';

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.css']
})
export class InfoEditComponent implements OnInit {


  @Output() update: EventEmitter<string> = new EventEmitter<string>()

  // public newInfo: Info | any
  public oldInfo: Info | any 
  constructor(private dataService: DataService, private router: Router) {
    this.oldInfo = dataService.getInfo()
  }


  returnHome() {
    this.router.navigate(['/home'])
  }

  updateInfoThenReturn(heading: string, content: string) {
    const newInfo = new Info(heading, content)
    this.dataService.setInfo(newInfo)
    // localStorage.setItem('info', value)
    this.returnHome()
  }

  ngOnInit(): void {
  }

}
