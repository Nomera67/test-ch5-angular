import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisioRoutingModule } from './visio-routing.module';
import { VisioComponent } from './visio.component';


@NgModule({
  declarations: [
    VisioComponent
  ],
  imports: [
    CommonModule,
    VisioRoutingModule
  ]
})
export class VisioModule { }
