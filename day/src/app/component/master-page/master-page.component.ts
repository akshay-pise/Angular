import { Component, OnInit } from '@angular/core';
import { MasterPageService } from 'src/app/service/master-page.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  masterList: any

  showForm: boolean = true;
  isShowAlert: boolean = false;
  isShowError: boolean = false;
  masterInfo: any;
  constructor(private servMaster: MasterPageService) {
    this.masterList = [];
    this.masterInfo = {
      "masterId": 0,
      "masterName": "",
      "masterFor": ""
    }
  }

  ngOnInit(): void {
    this.getAllMaster();
  }
  getAllMaster() {
    // debugger;
    this.servMaster.getAllMaster().subscribe((result: any) => {
      this.masterList = result['data']
    })
  }
  onEditMaster(para: any) {
    debugger;
    this.masterInfo = para;
  }
  addnewField() {
    this.servMaster.addNewMaster(this.masterInfo).subscribe((result: any) => {
      if (result.result == true) {
        this.getAllMaster();
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
  // updateField() { }
  updateField() {
    this.servMaster.UpdateMaster(this.masterInfo).subscribe((result: any) => {
      this.getAllMaster();
    })
  }
  addHideForm() {
    this.showForm == true ? this.showForm = false : this.showForm = true
    this.masterInfo = {
      "masterId": 0,
      "masterName": "",
      "masterFor": ""
    }
  }
}
