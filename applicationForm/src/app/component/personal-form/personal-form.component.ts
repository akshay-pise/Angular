import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  regform:FormGroup;
  constructor() {
    this.regform=new FormGroup({
      firstname:new FormControl(''),
      lastname:new FormControl(''),
      bdate:new FormControl(''),
      // gender:new FormControl(''),
      email:new FormControl(''),
      phoneno:new FormControl('')
    })
   }

  ngOnInit(): void {
  }

}
