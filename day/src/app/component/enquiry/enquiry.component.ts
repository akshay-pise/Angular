import { Component, OnInit } from '@angular/core';
import { EnquiryService } from './enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  enquirylist:IEnquiry [] ;
  constructor(private enquser:EnquiryService) {
    this.enquirylist=[
      {
        "enqiryId": 1,
        "name": "",
        "contactNo": "",
        "email": "",
        "query": ""
      }
    ]
   }
  ngOnInit(): void {
    this.getAllEnquiryList()
  }
  getAllEnquiryList(){
    this.enquser.getEnquiryList().subscribe((result:any) => {
      this.enquirylist = result['data'];
    })
  }
}
export interface IEnquiry{
  enqiryId:number;
  name: string;
  contactNo:string;
  email:string;
  query:string;
}
