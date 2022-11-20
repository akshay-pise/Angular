import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
// import {ConfirmationService, Message} from 'primeng/api';
// import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
// providers: [MessageService]

})
export class CandidateComponent implements OnInit {
  // msgs: Message[] = [];
  position: string='';
  candidateList: ICandidateList[];
  candidateObj: user;
  isAlert: boolean = false;
  isUpdated: boolean = false;
  isError: boolean = false;
  issidepanelOpen: boolean = false;
  isLoaderon: boolean = false;
  ismodalOpen: boolean = false;
  deleteItem: any;
  candidateHead:any[];
  constructor(private candiSrv: CandidateService) {
    this.candidateList = [];
    this.candidateObj = new user();
    this.candidateHead=["name",
    "contactNo",
    "email",
    "password",
    "city",
    "collegeName",
    "education"]
  }
  ngOnInit(): void {
    this.getAllCandidate();
  }
  getAllCandidate() {
    this.isLoaderon = true;
    this.candiSrv.getAllCandidate().subscribe((result: any) => {
      this.isLoaderon = false;
      this.candidateList = result['data'];
    });
  }
  addCandidate() {
    this.isLoaderon = true;
    this.candiSrv.addCandidate(this.candidateObj).subscribe((result: any) => {
      this.isLoaderon = false;
      if (result.result == true) {
        debugger;
        //this.isAlert = true;
        // this.messageService.add({severity:'success', summary:'Save Message', detail:'Record Saved Successfully'});

        this.candidateList.push(this.candidateObj);
        setTimeout(() => {
          this.isAlert = false;
          this.candidateObj = new user();
          // this.getAllCandidate();
        }, 5000);
      } else {
        this.isError = true;
      }
      this.candidateObj = new user();
    });
  }
  UpdateCandidate() {
    this.isLoaderon = true;
    this.candiSrv.updateCandidate(this.candidateObj).subscribe((result: any) => {
        if (result.result == true) {
         // this.isUpdated = true;
    // this.messageService.add({severity:'success', summary:'Update Message', detail:'Record updated Successfully'});

          this.getAllCandidate();
          setTimeout(() => {
            this.isUpdated = false;
            this.candidateObj = new user();
          }, 3000);
        } else {
          this.isError = true;
        }
        this.isLoaderon = false;
      });
    this.candidateObj = new user();
  }
  onEdit(para: any) {
    this.candidateObj = para;
    this.issidepanelOpen = true;
  }
  onModelBtnClicked(item: boolean) {
    debugger;
    if (item) {
      this.candiSrv.ondelete(this.deleteItem).subscribe((result: any) => {
        debugger;
        if (result.result == true) {
          this.ismodalOpen = false;
          const currentRecord = this.candidateList.findIndex(m=> m.candidateId == this.deleteItem.candidateId);
          if(currentRecord != -1){
            this.candidateList.splice(currentRecord,1)
          }
          // this.getAllCandidate();
        } else {
          alert(result.message);
        }
      });
    } else {
      this.ismodalOpen = false;
    }
  }
  ondelete(item: any) {
    debugger;
    this.ismodalOpen = true;
    this.deleteItem = item;
  }
  OnAdd() {
    this.issidepanelOpen = true;
  }
  onClose() {
    this.issidepanelOpen = false;
    this.candidateObj = new user();
  }
  OnDelete(item:any) {
    debugger
    // this.confirmationService.confirm({
    //     message: 'Do you want to delete this record?',
    //     header: 'Delete Confirmation',
    //     accept: () => {
    //       this.candiSrv.ondelete(item).subscribe((result: any) => {
    //         this.getAllCandidate();
    //       });
    //       this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
    //      setTimeout(() => {
    //       this.msgs = [];
    //      }, 3000);
    //     },
    //     reject: () => {
    //       this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
    //         setTimeout(() => {
    //           this.msgs = [];
    //         }, 3000);
    //     }

    // });
}
}
export interface ICandidateList {
  candidateId: number;
  name: string;
  contactNo: number;
  email: string;
  password: string;
  createdDate: Date;
  city: string;
  collegeName: string;
  education: string;
}
export class user {
  candidateId: number;
  name: string;
  contactNo: number;
  email: string;
  password: string;
  createdDate: Date;
  city: string;
  collegeName: string;
  education: string;
  constructor() {
    this.candidateId = 0;
    this.name = '';
    this.contactNo = 0;
    this.email = '';
    this.password = '';
    this.createdDate = new Date();
    this.city = '';
    this.collegeName = '';
    this.education = '';
  }
}
