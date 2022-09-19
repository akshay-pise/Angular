import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertycompo',
  templateUrl: './propertycompo.component.html',
  styleUrls: ['./propertycompo.component.css']
})
export class PropertycompoComponent implements OnInit {
  Probebtn:string;
  name:string;
  constructor() { 
    this.Probebtn='button using property binding';
    this.name='enter the name';  }

  ngOnInit(): void {
  }

}
