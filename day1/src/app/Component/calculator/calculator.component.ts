import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
num1:number;
num2:number;
result:any;
  constructor() { 
    this.num1=0;
    this.num2=0;
    // this.result=Number;
  }

  ngOnInit(): void {
  }

  add(){
  this.result=this.num1+this.num2;
  }
  sub(){
    this.result=this.num1-this.num2;
  }
  mul(){
    this.result=this.num1*this.num2;
  }
  div(){
    this.result=this.num1/this.num2;
  }
}
