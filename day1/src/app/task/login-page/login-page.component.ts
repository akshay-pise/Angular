import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  symptonsArray: any = [];
  changedvalue: string = "";
  check: any;
  selectSymptons:any;
  clientDetails:any;

  constructor() {
    this.selectSymptons='';
    this.clientDetails ={
      
      symptonsArray:[]
    }
  }

  ngOnInit(): void {
  }
  addSymptons() {
    this.clientDetails.symptonsArray.push(this.selectSymptons);
  }

}
