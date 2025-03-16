import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles = [
     { title: 'Components',navurl:"components", description: 'A component in Angular is a building block of the application UI' },
    // { title: 'Tile 2',navurl:"", description: 'This is the description for tile 2.' },
    // { title: 'Tile 3',navurl:"", description: 'This is the description for tile 3.' },
    // { title: 'Tile 3',navurl:"", description: 'This is the description for tile 3.' },
    // { title: 'Tile 3',navurl:"", description: 'This is the description for tile 3.' },
    // { title: 'Tile 4',navurl:"", description: 'This is the description for tile 4.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
