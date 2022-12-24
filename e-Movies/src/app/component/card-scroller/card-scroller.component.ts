import { Component, OnInit } from '@angular/core';
import{ServiceService}from'../../service.service';
@Component({
  selector: 'app-card-scroller',
  templateUrl: './card-scroller.component.html',
  styleUrls: ['./card-scroller.component.css']
})
export class CardScrollerComponent {
  dataSource:any[]=[];
  states:any;
  constructor(service: ServiceService) {
    this.dataSource = service.getMovies();
    this.states = service.getStates();
  }
}
