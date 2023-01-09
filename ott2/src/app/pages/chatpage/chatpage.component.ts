import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {

  userChatList: any[] = [];
  userGroupChatList: any[] = [];

  constructor(private serv: ServiceService) { }

  ngOnInit(): void {
    this.getUserChatList();
    this.getUserGroupChatList();
  }
  getUserChatList() {
    debugger;
    this.serv.getUserList().subscribe((result: any) => {
      this.userChatList = result.data;
    })
  }
  getUserGroupChatList() {
    debugger;
    this.serv.getUserGroupList().subscribe((result: any) => {
      this.getUserGroupChatList = result.data;
    })
  }
}
