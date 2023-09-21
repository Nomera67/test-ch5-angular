import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/connexion/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private webSocketService: WebsocketService) {}
  title = 'angular-crestron';

  ngOnInit(): void {
    this.webSocketService.getMessages().subscribe(
      (message) => {
        console.log(message);
      },
      (error) => {
        console.error('Websocket connection error')
      }
    )
  }
}
