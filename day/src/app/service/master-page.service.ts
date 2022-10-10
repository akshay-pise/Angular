import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterPageService {

  constructor(private http:HttpClient) { }

  getAllMaster():Observable <any[]>{
    return this.http.get<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllMaster")
  }
  // addNewMaster():Observable <any[]>{
  //   return this.http.post<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCourse")
  // }
  addNewMaster(obj:any):Observable<any> {
    return this.http.post<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCourse",
      obj);
  }
}
