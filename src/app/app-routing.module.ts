import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'accueil'
  },
  { path: 'accueil', loadChildren: () => import('./components/pages/accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'visio', loadChildren: () => import('./components/pages/visio/visio.module').then(m => m.VisioModule) },
  { path: 'sources', loadChildren: () => import('./components/pages/sources/sources.module').then(m => m.SourcesModule) },
  { path: 'lights', loadChildren: () => import('./components/pages/lights/lights.module').then(m => m.LightsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
