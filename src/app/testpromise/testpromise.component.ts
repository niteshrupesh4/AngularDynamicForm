import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, mergeMap, Observable, ReplaySubject, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-testpromise',
  templateUrl: './testpromise.component.html',
  styleUrls: ['./testpromise.component.css']
})
export class TestpromiseComponent implements OnInit {

  constructor(){
    console.log("constructor");
  }

  subject = new BehaviorSubject(10);
  data: any[] = [];
  arr: any[] = ['Java', 'C#', 'Node', 'Python', 'DotNet']
  serachvalue = new FormControl();

  ngOnInit(): void {
    let [top1, toplast] = this.arr;

    console.log(top1, toplast);
    this.serachvalue.valueChanges.pipe(
      debounceTime(500),
      switchMap((serchText: string) => this.addData(serchText))
    ).subscribe(res =>{
      this.data.push(res)
    })

    console.log("ngOnInit");
    //Promise
    const promise = new Promise(resolve =>{
      setTimeout(() => {
        console.log("Promiss");
        resolve("Promiss execute");
      }, 500);
    });
    

    promise.then(res=>{
      console.log(res)
    })

    //Observable
    const ober = new Observable(subs =>{
      setTimeout(() => {
        console.log("Observable");
        subs.next("Observable execute");
      }, 500);
    });

    ober.subscribe(res=>{
      console.log(res)
    })

    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);
    this.subject.next(4);
    this.subject.next(5);
    this.subject.next(6);
  }

  addData(serchText: string){
    let obr = new Observable<string>(sub =>{
      setTimeout(() => {
        sub.next(serchText);
      }, 5000);
    })
    return obr;
  }
  

}
