import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
