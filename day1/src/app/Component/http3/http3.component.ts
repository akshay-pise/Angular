import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http3',
  templateUrl: './http3.component.html',
  styleUrls: ['./http3.component.css']
})
export class Http3Component implements OnInit {

  dataList:any;
  questionObjectFile:any;
  questionList: any;
  show:boolean=false;
  constructor(private http:HttpClient) {
    this.dataList=[]
    this.questionObjectFile={
      "QuestionId": 0,
      "Question": "string",
      "AnswerType": "string",
      "IsDeleted": true,
      "QuestionDetails": "string",
      "DifficultyLevel": "string",
      "IsMultple": true,
      "Options": [
      ]
    }
  }

  ngOnInit(): void {
    this.showComments();
    this.showQuestion();

  }
  showtable(){
   this.show==true?this.show=false:this.show=true
  }
  showComments(){
    this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe(data=> {

      this.dataList = data;
    })
  }

  showQuestion(){
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllQuestion").subscribe((resu:any) => {
      this.questionList=resu['data'];
    })
  }

  addquestion(){
    // debugger;
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/AddQuestion",this.questionObjectFile).subscribe((result:any)=>{
      this.showQuestion();
      alert(result.message);
      this. questionObjectFile={}
    })
  }

}
