import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebsocketService } from './services/connexion/websocket.service';


// import WebXPanel, { WebXPanelConfigParams, isActive, WebXPanelEvents } from '@crestron/ch5-webxpanel';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// const configuration: Partial<WebXPanelConfigParams> = { 
//   host: 'https://vc4.av-connexion.eu',
//   ipId: '3',
//   roomId: 'HTML5',
//   tokenUrl: 'https://vc4.av-connexion.eu',
//   tokenSource: 'CSSelf|Fusion',
//   port: 49200,
// };

// const webXPanelFactory = () => () => {
//   if (isActive) { 
//     WebXPanel.initialize(configuration); 
//   } else {
//     console.log(isActive)
//   }
// }

// WebXPanel.addEventListener(WebXPanelEvents.CONNECT_CIP, (detail:any) => {
//   const {url, ipId, roomId} = detail;
//   console.log(`Connected to ${url}, 0x${ ipId.toString(16)}, ${roomId}`);
// });

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WebsocketService
    // { provide: APP_INITIALIZER, useFactory: webXPanelFactory, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
