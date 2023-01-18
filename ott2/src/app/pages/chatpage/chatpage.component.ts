import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  @Input() userChatList: any[] = [];
  constructor(private serv: ServiceService) { }

  ngOnInit(): void {
    // this.getUserChatList();
    // this.getUserGroupChatList();
  }
  getUserChatList() {
    this.serv.getUserList().subscribe((result: any) => {
      this.userChatList = result.results;
      console.log(this.userChatList);
    })
  }
}
