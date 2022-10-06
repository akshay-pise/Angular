import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private  http:HttpClient) {

  }
  getEnquiryList():Observable<any[]>{
    return this.http.get<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEnquiryMaster");
  }
}
