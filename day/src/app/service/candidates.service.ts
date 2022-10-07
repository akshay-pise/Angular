import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(private http:HttpClient) { }

  getAllCandidate():Observable <any[]>{
    return this.http.get<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates")

  }
  addCandidate(obj:any):Observable<any> {
    return this.http.post<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCandidate",
      obj);
  }
  Onsavelang(obj:any):Observable<any>{
    return this.http.post<any>("http://storeapi.gerasim.in/api/Interview/addLanguage",obj)
   }
}
