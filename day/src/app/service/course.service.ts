import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  getAllCourse():Observable <any[]>{
    debugger;
    return this.http.get<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList")

  }
}
