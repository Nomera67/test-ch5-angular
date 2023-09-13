import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import WebXPanel, { isActive, getVersion, getBuildDate, WebXPanelEvents } from "@crestron/ch5-webxpanel";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log(`WebXPanel isActive: ${isActive}`)
console.log(`WebXPanel version: ${getVersion()}`);
console.log(`WebXPanel build date: ${getBuildDate()}`);