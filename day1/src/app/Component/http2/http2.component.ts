import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http2',
  templateUrl: './http2.component.html',
  styleUrls: ['./http2.component.css']
})
export class Http2Component implements OnInit {
  dataList: any;
  languagelist: any=[];
  languageObj:any={
    CourseId:0,
    CourseName:'',
    CourseDuration:'',
    CourseBasicFees:0
  };
  constructor(private http: HttpClient) {
    this.dataList = []
  }

  ngOnInit(): void {
    // this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=> {

    //   this.dataList = data;
    // })
    this.getvalue();
  }
  getvalue() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList").subscribe((result:any) => {
      this.languagelist = result['data'];
    })
  }

  addnewLanguage(){
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCourse",this.languageObj).subscribe((result:any) =>{
      // this.languagelist=result;
      this.getvalue();
    })
  }

}

