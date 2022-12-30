import { Component, OnInit } from '@angular/core';
import {OttService} from '../../ott.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  dataSource:any[]=[];
  states:any;
  constructor(service: OttService) {
    this.dataSource = service.getMovies();
    this.states = service.getStates();
  }
  ngOnInit(): void {
  }
}
