import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http5',
  templateUrl: './http5.component.html',
  styleUrls: ['./http5.component.css']
})
export class Http5Component implements OnInit {

  dataList:any;
  constructor(private http:HttpClient) { 
    this.dataList=[]
  }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(data=> {
     
      this.dataList = data;
    })
  }

}