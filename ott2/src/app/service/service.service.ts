import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any[]> {

    return this.http.get<any[]>("https://briidea.ensurechat.com/api/UserChat/showUserListforChat/");
  }
  getUserGroupList(): Observable<any[]> {
    return this.http.get<any[]>("https://briidea.ensurechat.com/api/ChatGroup/showGroupListforChat/");
  }

  //   User Chat Window API
  // https://briidea.ensurechat.com/api/UserChat/row?id=63&start=0
  //   Group Chat Window API
  // https://briidea.ensurechat.com/api/ChatGroup_Messages/row?id=13&start=0
}
