import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-ttdashboard',
  templateUrl: './o-ttdashboard.component.html',
  styleUrls: ['./o-ttdashboard.component.css']
})
export class OTTDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onKeydown(){
console.log('workoing')
  }
}
