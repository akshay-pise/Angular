import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  dataList: any;
  showForm: boolean = true;
  isShowAlert: boolean = false;
  isShowError: boolean = false;
  languagelist: any = [];
  courseObj: any = {
    courseId: 0,
    courseName: '',
    courseDuration: '',
    courseBasicFees: 0
  };
  constructor(private http: HttpClient) {
    this.dataList = []
  }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data: any) => {

      this.dataList = data;
    })
    this.getAllLanguagevalue();
  }
  getAllLanguagevalue() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList").subscribe((result: any) => {
      this.languagelist = result['data'];
    })
  }

  addnewLanguage() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCourse",
      this.courseObj).subscribe((result: any) => {
        // this.languagelist=result;

        if (result.result == true) {
          this.getAllLanguagevalue();
          this.isShowAlert = true;
          setTimeout(() => {
            this.isShowAlert = false;
          }, 5000);
        } else {
          this.isShowError = true;
          setTimeout(() => {
            this.isShowError = false;
          }, 5000);
        }
      })
  }
  updateLanguage() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/updateCourse",
      this.courseObj).subscribe((result: any) => {
        this.getAllLanguagevalue();
      })
  }
  deleteLanguage(item: any) {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/deleteCourse",
      item).subscribe((result: any) => {
        this.getAllLanguagevalue();
      })
  }
  onEdit(para: any) {
    debugger;
    this.courseObj = para;
  }
  // showForm: boolean = true;
  addform() {
    this.showForm == true ? this.showForm = false : this.showForm = true
    this.courseObj = {
      courseId: 0,
      courseName: '',
      courseDuration: '',
      courseBasicFees: 0
    };
  }
}
