import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  demoList :any[]=[];
  demo:any;

  constructor(private http : HttpClient ) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData()
  {
    debugger;
    this.http.get<any[]>("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
  .subscribe((data:any) => {

    const array=Object.entries(data["Time Series (5min)"]).map((e)=>({
      [e[0]]:e[1]}
    ));
    this.demoList=array;
    let newArr = this.demoList.map((item) => {
      return  {
        open:item['1. open'],
        name: item['2. high']
      }

  });
      console.log('newarr',newArr);
    // this.demoList=data['Time Series (5min)'];
    console.log(JSON.stringify(this.demoList));
  })
}
}
