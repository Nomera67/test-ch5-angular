import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisioComponent } from './visio.component';

const routes: Routes = [{ path: '', component: VisioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisioRoutingModule { }
