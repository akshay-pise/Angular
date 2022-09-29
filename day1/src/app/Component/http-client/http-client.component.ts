import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  languageList:any;
  languageListsecond: any;
  addlanguage:any;

  constructor(private http:HttpClient
    ) {
      this.languageList=[]
      this.languageListsecond=[]
      this.addlanguage={}
     }

  ngOnInit(): void {
    this.getlanguage();
    this.http.get(" http://storeapi.gerasim.in/api/Interview/GetLanguageTopic").subscribe(finaldata=> {

      this.languageListsecond = finaldata;
    })

  }
  Onsavelang(){
    this.http.post("http://storeapi.gerasim.in/api/Interview/addLanguage",this.addlanguage)
    .subscribe(Result=> {
      this.getlanguage();
    })


  }
  getlanguage(){
    this.http.get("https://storeapi.gerasim.in/api/Interview/GetLanguage").subscribe(data=> {

      this.languageList = data;
    })
  }




}
