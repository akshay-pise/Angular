import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-profil-chat',
  templateUrl: './profil-chat.component.html',
  styleUrls: ['./profil-chat.component.css']
})
export class ProfilChatComponent implements OnInit {

  @Input() userChatList: any[] = [];
  constructor() { }
  ngOnInit(): void {
  }
}
