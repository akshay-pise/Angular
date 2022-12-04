import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reustable',
  templateUrl: './reustable.component.html',
  styleUrls: ['./reustable.component.css']
})
export class ReustableComponent implements OnInit {

  @Input() headarray: any[] = [];
  @Input() dataarray: any[] = [];

  @Output() onpedit = new EventEmitter<any>();
  @Output() onpDelete= new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
  }
  onedit(item: any) {
    this.onpedit.emit(item);
  }
  onDelete(item: any) {
    this.onpDelete.emit(item);
  }

}
