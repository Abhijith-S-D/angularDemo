import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../model/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input()
  data: Chat;

  constructor() { }

  ngOnInit() {
  }

}
