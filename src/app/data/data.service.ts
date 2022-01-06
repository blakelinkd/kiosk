import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  info: string = 'default dataService info'

  constructor() { }

  
  getInfo(): string {
    // try to get the info from the browser localStorage before returning this default value
    
    if(localStorage.getItem('info')) {
      console.log(`property info exists in localStorage with the value of ${ localStorage.getItem('info')}`)
    }
    return this.info
    

  }

  setInfo(newInfo: string) {
    if(newInfo) {
      this.info = newInfo
    }
  }
}
