import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http4',
  templateUrl: './http4.component.html',
  styleUrls: ['./http4.component.css']
})
export class Http4Component implements OnInit {

  dataList:any;
  constructor(private http:HttpClient) { 
    this.dataList=[]
  }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data=> {
     
      this.dataList = data;
    })
  }

}