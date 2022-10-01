import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http4',
  templateUrl: './http4.component.html',
  styleUrls: ['./http4.component.css']
})
export class Http4Component implements OnInit {

  dataList: any;
  show: boolean;
  showcandidatelist: boolean;
  candidateList: any;
  CandidateInfo: any;
  constructor(private http: HttpClient) {
    this.CandidateInfo = {
      "CandidateId": 0,
      "Name": "string",
      "ContactNo": "string",
      "Email": "string",
      "Password": "string",
      "CreatedDate": "2022-09-30T10:13:39.311Z",
      "City": "string",
      "CollegeName": "string",
      "Education": "string"
    }
    this.dataList = [];
    this.candidateList = [];
    this.show = false;
    this.showcandidatelist = false;
  }

  ngOnInit(): void {
    this.todosFunction();
    this.getAllCandidate()

  }
  showtable() {
    this.show == true ? this.show = false : this.show = true
  }
  todosFunction() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data => {
      this.dataList = data;
    })
  }

  getAllCandidate() {
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates").subscribe((result: any) => {
      this.candidateList = result['data'];
    })
  }
  addCandidate() {
    debugger;
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCandidate",
      this.CandidateInfo).subscribe((result: any) => {
        this.getAllCandidate();
      })
  }
  updateCandidate() {
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCandiadte",
      this.CandidateInfo).subscribe((result: any) => {
        this.getAllCandidate();
      })
    }
  deleteCandidate(item:any){
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/DeleteCandidate",
    item).subscribe((result:any) =>{
      this.getAllCandidate();
    })
  }
  onEdit(para:any){
    debugger;
    this.CandidateInfo=para;
  }

}
