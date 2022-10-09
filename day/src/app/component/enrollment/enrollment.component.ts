import { Component, OnInit } from '@angular/core';
import { CandidatesService } from 'src/app/service/candidates.service';
import { CourseService } from 'src/app/service/course.service';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  isShowAlert: boolean = false;
  isShowError: boolean = false;
  enrollmentObj: any;
  enrollmentList: any[];
  candidateList: any;
  courseList:any;
  constructor(private enrollserv: EnrollmentService, private candservi: CandidatesService, private courseservi: CourseService) {
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
    this.enrollmentList = [];
    this.candidateList = [];
    this.courseList=[];
  }

  ngOnInit(): void {
    this.getEnrollmentList();
    this.getCandidateList();
    this.getAllCourse();
  }
  getEnrollmentList() {
    this.enrollserv.getEnrollmentList().subscribe((result: any) => {
      this.enrollmentList = result['data']
    });

  }
  getCandidateList() {
    this.candservi.getAllCandidate().subscribe((result: any) => {
      this.candidateList = result['data'];
    })
  }
  getAllCourse() {
    debugger;
    this.courseservi.getAllCourse().subscribe((result: any) => {
      this.courseList = result['data'];
    })
    // this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList").subscribe((result:any) => {
    //   this.languagelist = result['data'];
    // })
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
  onEditEnrollment(para: any) {
    // this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/DeleteCandidate",
    // item).subscribe((result:any) =>{
    //   this.getAllCandidate();
    // })
  }
  deleteEnrollment(para: any) {
    this.enrollmentObj = para;
  }


}
