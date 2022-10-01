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
    courseId:0,
    courseName:'',
    courseDuration:'',
    courseBasicFees:0
  };
  constructor(private http: HttpClient) {
    this.dataList = []
  }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=> {

      this.dataList = data;
    })
    this.getAllLanguagevalue();
  }
  getAllLanguagevalue() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList").subscribe((result:any) => {
      this.languagelist = result['data'];
    })
  }

  addnewLanguage(){
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCourse",
    this.languageObj).subscribe((result:any) =>{
      // this.languagelist=result;
      this.getAllLanguagevalue();
    })
  }
  updateLanguage(){
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/updateCourse",
    this.languageObj).subscribe((result:any) =>{
      this.getAllLanguagevalue();
    })
  }
  deleteLanguage(item:any){
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/deleteCourse",
    item).subscribe((result:any) =>{
      this.getAllLanguagevalue();
    })
  }
  onEdit(para:any){
    debugger;
    this.languageObj=para;
  }

}

