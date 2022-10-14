import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
value:any;
  constructor() {
    this.value=''
  }

  ngOnInit(): void {
  }

}
