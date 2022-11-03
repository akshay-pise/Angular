import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers:any[]=[];
  loginObj: any;
  signupObj:any;
  constructor(private router: Router) {
    this.loginObj = {
      userName: '',
      password: ''
    }
    this.signupObj={
      userName: '',
      email:'',
      password: ''
    }
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.loginObj.userName == 'admin' && this.loginObj.password == 'admin') {
      this.router.navigateByUrl('home');
      localStorage.setItem('userid','admin');

    }
    else {
      alert("User Id & Passward Not Match");
    }
  }

}

