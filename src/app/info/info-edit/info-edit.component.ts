import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'
import { Router } from '@angular/router';
import { DataService } from '../../data/data.service'

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.css']
})
export class InfoEditComponent implements OnInit {


  @Output() update: EventEmitter<string> = new EventEmitter<string>()

  newInfo: string = ''
  oldInfo: string = ''
  constructor(private dataService: DataService, private router: Router) {
    this.oldInfo = dataService.getInfo()
  }


  returnHome() {
    this.router.navigate(['/home'])
  }

  updateInfoThenReturn(value: string) {
    this.dataService.setInfo(value)
    localStorage.setItem('info', value)
    this.returnHome()
  }

  ngOnInit(): void {
  }

}
