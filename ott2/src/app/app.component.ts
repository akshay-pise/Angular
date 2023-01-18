import { Component } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  puserChatList:any[]=[]
  constructor(private serv: ServiceService) { }

  ngOnInit(): void {
    this.getUserChatList();
  }
  getUserChatList() {
    this.serv.getUserList().subscribe((result: any) => {
      this.puserChatList = result.results;
    })
  }
}
