import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validationform',
  templateUrl: './validationform.component.html',
  styleUrls: ['./validationform.component.css']
})
export class ValidationformComponent implements OnInit {

  
  objdata:any={
    firstname:'',
    passward:'',
    isTermsAccepted:false
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
      console.log(this.objdata)

  }

}
