import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm:FormGroup;
  constructor() {
    this.userForm=new FormGroup({})
    this.loginform();
  }

  ngOnInit(): void {
  }
  loginform(){
    this.userForm=new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      phoneNumber:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      dob:new FormControl('',Validators.required),
      paswd:new FormControl('',Validators.required),
      // address: new FormGroup({
      //   country:new FormControl('',Validators.required),
      //   state:new FormControl('',Validators.required),
      //   city:new FormControl('',Validators.required)
      // })
    })
  }
  onSubmit(){
    this.userForm.markAllAsTouched();
    if(!this.userForm.invalid){
      let arr=[]
      arr.push(this.userForm.value);
      localStorage.setItem('uerList',JSON.stringify(arr));
    }
  }

}
