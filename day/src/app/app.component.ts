import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  number: number;
  array: string[];
  arraynum: number[];
  objnm: any;
  arrobj: any;
  todaydate: any = new Date();
  constructor() {
    this.name = "parent class";
    this.number = 10;
    this.arraynum = [10, 20, 30];
    this.array = ["first", "last"];
    this.objnm = {
      name: "akshay",
      sname: "pise"
    }
    this.todaydate = new Date();

    this.arrobj = [
      {
        name: "akshay",
        sname: "pise"
      },
      {
        name: "akshay",
        sname: "pise"
      }
    ]
  }

}
