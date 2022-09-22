import { createInjectableType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
arraylist: string[];
// hide:boolean=false;
nameofarray:any [];
passfirstvalue:string='';
passsecondvalue:string='';

  constructor() { 
    this.arraylist=['pune','mumbai','nagpur'];

    this.nameofarray=[
      {
        firstname:"asd",
        lastname:"qwe"
      },
      {
        firstname:"poi",
        lastname:"mnb"
      }
    ]

    // if(this.passfirstvalue!=='' && this.passsecondvalue!=='')
    // {
    //   this.hide=false;
    // }
    // else{
    //   this.hide=true;
    // }
  }

  ngOnInit(): void {
  }
  submitinfo(){
    this.nameofarray.push({firstname:this.passfirstvalue,
    lastname:this.passsecondvalue});
    console.log(this.nameofarray);
  }
  removeinfo(){
    this.nameofarray.pop();
  }
}
