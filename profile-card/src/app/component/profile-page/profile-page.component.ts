import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profile:any;
  constructor() {
    this.profile={
      userName:"",
      password:"",
      designation:"",
      currentEmployer:"",
    };
  }

  ngOnInit(): void {
  }
  onSubmit(){
    localStorage.setItem("user",this.profile);
  }
  onBack(){

  }
}
