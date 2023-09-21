import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket$: WebSocketSubject<any>;


  constructor() {
    this.socket$ = webSocket('ws://10.57.17.60:8080');
  }

  sendMessage(message: any): void {
    this.socket$.next(message);
  }

  getMessages(){
    return this.socket$.asObservable();
  }
}
