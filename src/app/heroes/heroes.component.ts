import { Component, OnInit } from '@angular/core';
import { Hero } from './Models/hero.interface'
import { HEROES } from './Data/mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  title = 'Tour of Heroes'

  heroes = HEROES

  constructor() { }

  ngOnInit(): void {
  }

}
