import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServfileService {

  constructor(private http:HttpClient) {
  }
    getlanguage():Observable<any[]>{
      return this.http.get<any[]>(" http://storeapi.gerasim.in/api/Interview/GetLanguageTopic")
    }

   Onsavelang(obj:any):Observable<any>{
    return this.http.post<any>("http://storeapi.gerasim.in/api/Interview/addLanguage",obj)
   }
   updateCandidate(obj:any):Observable<any>{
   return this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCandiadte",obj)
   }

}
