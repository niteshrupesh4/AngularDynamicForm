import { Component, OnDestroy, OnInit, OnChanges, Input, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  constructor(){
    console.log("Child constructor")
  }
  interval: any;
  @Input() textvalue: string = '';
  

  ngOnInit(): void {
    console.log("Child ngOnInit")
    let couter = 0;
    // this.interval = setInterval(() => {
    //   couter += 1;
    //   console.log(couter);
    // }, 500);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("Child ngOnChanges")
  }

  ngDoCheck(){
    console.log("Child ngDoCheck")
  }
  
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("Child ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("Child ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("Child ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("Child ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log("Child ngOnDestroy")
  }
}
