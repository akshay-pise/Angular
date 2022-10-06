import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private  http:HttpClient) {

  }
  getEnrollmentList():Observable<any[]>{
    return this.http.get<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEntrollments");
  }
}
