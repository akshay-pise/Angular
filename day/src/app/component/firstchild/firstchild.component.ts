import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent implements OnInit {
  name:string;
  count:number=1;
  num1:number=10;
  num2:number=20;
  result:any;
  constructor() {
    this.name="firstchild works!";

   }
   increfun(){
    this.count+=1;
   }
   decrefun(){
    this.count-=1;
   }
   selectop(){
    alert("city changed");
   }

  ngOnInit(): void {
  }
  adding(){
    this.result=Number(this.num1)+Number(this.num2);
  }

}
