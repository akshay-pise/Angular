import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-component',
  templateUrl: './ngif-component.component.html',
  styleUrls: ['./ngif-component.component.css']
})
export class NgifComponentComponent implements OnInit {
  value:string;
  loform: string;
isshow: boolean=false;
  constructor() {
    this.value="Enter the name";
    this.loform="Login Form name using Interpolation"
  //  if(this.isshow==false)
  //  {
    

  //  }
  this.isshow=!this.isshow
  }

  ngOnInit(): void {
  }

}
