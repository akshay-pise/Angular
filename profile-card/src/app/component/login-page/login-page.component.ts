import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginObj: any;
  constructor(private router: Router) {
    this.loginObj = {
      userName: '',
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
