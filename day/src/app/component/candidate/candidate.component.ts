import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CandidatesService } from './candidates.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {


  dataList: any;
  show: boolean;
  showcandidatelist: boolean;
  candidateList: any;
  CandidateInfo: any;
  isShowAlert:boolean = false;
  isShowError:boolean = false;
  constructor(private http: HttpClient, private candservi: CandidatesService) {
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
    this.getAllCandidate();

  }
  showtable() {
    this.show == true ? this.show = false : this.show = true
  }
  todosFunction() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((data:any) => {
      this.dataList = data;
    })
  }

  getAllCandidate() {
    this.candservi.getAllCandidate().subscribe((result: any) => {
      this.candidateList = result['data'];
    })
  }
  addCandidate() {
    debugger;
    this.candservi.addCandidate(this.CandidateInfo).subscribe((result: any) => {


        if (result.result == true) {
          this.getAllCandidate();
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
  updateCandidate() {
        this.candservi.addCandidate(this.CandidateInfo).subscribe((result: any) => {
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
