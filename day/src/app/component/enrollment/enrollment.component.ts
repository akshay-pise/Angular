import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  isShowAlert:boolean = false;
  isShowError:boolean = false;
  enrollmentObj: any ;
  enrollmentList:any [];
  constructor(private enrollserv: EnrollmentService) {
    this.enrollmentObj =
      {
        "enrollmentId": 0,
        "courseId": 414,
        "courseName": "",
        "candidateId": 370,
        "name": "",
        "contactNo": "",
        "email": "",
        "enrollmentDate": "",
        "enrollmentNo": ""
      };
      this.enrollmentList=[];
  }

  ngOnInit(): void {
    this.getEnrollmentList();
  }
  getEnrollmentList() {
    this.enrollserv.getEnrollmentList().subscribe((result: any) =>{
     this.enrollmentList = result['data']
    });

  }
  addEnrollment() {

    // this.candservi.addCandidate(this.CandidateInfo).subscribe((result: any) => {
    //     if (result.result == true) {
    //       this.getAllCandidate();
    //       this.isShowAlert = true;
    //       setTimeout(() => {
    //         this.isShowAlert = false;
    //       }, 5000);
    //     } else {
    //       this.isShowError = true;
    //       setTimeout(() => {
    //         this.isShowError = false;
    //       }, 5000);
    //     }
    //   })
  }
  updateEnrollment() {
    // this.candservi.addCandidate(this.CandidateInfo).subscribe((result: any) => {
    //   this.getAllCandidate();
    // })
  }
  onEditEnrollment(para:any){
    // this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/DeleteCandidate",
    // item).subscribe((result:any) =>{
    //   this.getAllCandidate();
    // })
  }
  deleteEnrollment(para:any){
    this.enrollmentObj=para;
  }


}
