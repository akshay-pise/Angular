import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServfileService } from '../servfile.service';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  languageList: any;
  languageListsecond: any;
  addlanguage: any;
  isShowAlert: boolean = false;
  isShowError: boolean = false;


  constructor(private http: HttpClient, private langsur: ServfileService) {
    this.languageList = []
    this.languageListsecond = []
    this.addlanguage = {}
  }

  ngOnInit(): void {
    this.getlanguage();
    this.http.get(" http://storeapi.gerasim.in/api/Interview/GetLanguageTopic").subscribe(finaldata => {

      this.languageListsecond = finaldata;
    })

  }
  // Onsavelang(){
  //   this.http.post("http://storeapi.gerasim.in/api/Interview/addLanguage",this.addlanguage)
  //   .subscribe(Result=> {
  //     this.getlanguage();
  //   })

  // }
  // getlanguage(){
  //   this.http.get("https://storeapi.gerasim.in/api/Interview/GetLanguage").subscribe(data=> {

  //     this.languageList = data;
  //   })
  // }
  getlanguage() {
    this.langsur.getlanguage().subscribe((result: any) => {
      this.languageList = result;
    })
  }
  Onsavelang() {
    this.langsur.Onsavelang(this.addlanguage).subscribe((result: any) => {

      if (result.result == true) {
        // alert(result.message)
        this.getlanguage();
        this.isShowAlert = true;
        setTimeout(() => {
          this.isShowAlert = false;
        }, 5000);
      } else {
        // alert(result.message)
        this.isShowError = true;
        setTimeout(() => {
          this.isShowError = false;
        }, 5000);
      }

    })
  }
}


