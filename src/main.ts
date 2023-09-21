import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import WebXPanel, { isActive, getVersion, getBuildDate, WebXPanelEvents } from "@crestron/ch5-webxpanel";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// console.log(`WebXPanel isActive: ${isActive}`)
// console.log(`WebXPanel version: ${getVersion()}`);
// console.log(`WebXPanel build date: ${getBuildDate()}`);


// //WEBSOCKET

// let url: string = 'http://10.57.17.60/INLO/config.json';
// // let url: string = 'http://127.0.0.1:5500/01_Software/config.json';

// let urlWebSocket: string = "ws://10.57.17.60:8080";
// let exampleSocket: WebSocket = new WebSocket(urlWebSocket);

// exampleSocket.onopen = function (event: Event) {
//   if (event.returnValue !== undefined && event.returnValue !== null) {
//       console.log("Connected to the websocket on : " + urlWebSocket);
//       exampleSocket.send("update");
//   }
// };

// exampleSocket.onmessage = function (event: MessageEvent) {
//     // console.log(event.data);
//     if (event.data === "ping")
//         exampleSocket.send("pong");
//     else {
//         console.log(`It's a fail !`)
//     }
// };