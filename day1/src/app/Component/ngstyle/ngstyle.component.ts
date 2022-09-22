import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  redcolor:any;
  greenhere:string='';
  sizing:any;
  pogrssbar:any [];

  constructor() {
    this.pogrssbar =[
      {
        name:"pravin",
      pgor:50
    },
    {
      name:"vishal",
      pgor:80
    },
    {
      name:"sagar",
    pgor:60
    },
    ]
   }

  ngOnInit(): void {
  }
  change(){
    this.greenhere="green";
    this.sizing="100";
    this.redcolor = {
      "color":"red",
      "font-size":"30px"
    }
  }
}

