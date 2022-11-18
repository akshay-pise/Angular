import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  getAllCandidate(): Observable<any[]> {
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates");
  }

  addCandidate(obj:any):Observable<any>{
    return this.http.post("https://onlinetestapi.gerasim.in/api/OnlineTest/AddCandidate",obj);
  }

  updateCandidate(obj:any):Observable<any>{
    return this.http.post("https://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCandiadte",obj);
  }

  ondelete(item:any):Observable<any>{
    return this.http.post("https://onlinetestapi.gerasim.in/api/OnlineTest/DeleteCandidate",item);
  }
}
