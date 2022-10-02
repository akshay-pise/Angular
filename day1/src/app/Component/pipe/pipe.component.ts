import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  amount:number=100.1247;
  today=Date();
  name:string="akshay";
  lastname="pise";
  number={
    name:"akshy"
  };
typefind=typeof(this.number);
  constructor() {

  }

  ngOnInit(): void {
  }

}
