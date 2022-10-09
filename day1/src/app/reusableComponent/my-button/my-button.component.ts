import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  @Input() buttonText:string='';
  @Input() buttonClass:string='';

  @Output() onBtnClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.onBtnClicked.emit('hi');
  }

}
