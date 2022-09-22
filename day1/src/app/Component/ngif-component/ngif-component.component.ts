import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-component',
  templateUrl: './ngif-component.component.html',
  styleUrls: ['./ngif-component.component.css']
})
export class NgifComponentComponent implements OnInit {
  value:string='';
  placevalue:string;
  loform: string;
show: boolean=false;
condition: boolean=true;
showbox:boolean=false;
changedvalue:string='';

  constructor() {
    this.placevalue="Enter the name";
    this.loform="Login Form name using Interpolation"
  }
  ngOnInit(): void {
  }
  onchange(){
    (this.value=="other")?this.show=true:this.show=false;
  }
  changediv(){
    (this.changedvalue=="other") ? (this.showbox=true) : (this.showbox=false);
    // if(this.changedvalue=="other"){
    //   this.showbox=true;
    // }
    // else{
    //   this.showbox=false;
    // }
  }
}
