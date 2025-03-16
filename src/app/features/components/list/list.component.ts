import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  tiles = [
    { title: 'Dynacmic',navurl:"dynamic", description: 'Dynamically add or remove form controls based on the user\'s input or other conditions.' },
    { title: 'Parent',navurl:"parent", description: 'Parent Component' },
    { title: 'Tile 3',navurl:"", description: 'This is the description for tile 3.' },
    { title: 'Tile 3',navurl:"", description: 'This is the description for tile 3.' },
    { title: 'Tile 3',navurl:"", description: 'This is the description for tile 3.' },
    { title: 'Tile 4',navurl:"", description: 'This is the description for tile 4.' }
  ];
}
