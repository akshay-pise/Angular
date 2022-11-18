import { Component, Input, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/Component/candidate.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() canList:any[]=[];
  @Input() tablehead:any[]=[]
  constructor() {

  }


  ngOnInit(): void {
    // this.getAllCandidate();
  }
  // getAllCandidate() {
  //   this.candiSrv.getAllCandidate().subscribe((result: any) => {
  //     this.candidateList = result['data'];
  //   });
  // }

}
