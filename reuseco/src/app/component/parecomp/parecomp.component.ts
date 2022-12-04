import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parecomp',
  templateUrl: './parecomp.component.html',
  styleUrls: ['./parecomp.component.css']
})
export class ParecompComponent implements OnInit {
  parheadarray:any[]=['name','email','phone','website'];
  paredataarray:any[]=[];
  constructor( private http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.paredataarray=result;
    });
  }
  onedit(item:any){
    debugger
    console.log(item);
  }
  ondelete(item:any){
    debugger
    console.log(item);
  }

}
