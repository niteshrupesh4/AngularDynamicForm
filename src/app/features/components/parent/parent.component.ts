import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  constructor(){
    console.log("Parent constructor")
  }

  textvalue: string = '';
  isChild: boolean = false;
  OnClick(){
    this.isChild = !this.isChild;
  }

  ngOnInit(): void {
    console.log("Parent ngOnInit")
  }
}
