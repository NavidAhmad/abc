import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcnHomeComponent } from './components/hcn-home/hcn-home.component';


const routes: Routes = [
  {path:'', component:HcnHomeComponent},
  { path: 'hcn', redirectTo: '/', pathMatch: 'full' },
  { path: 'whyHCN', loadChildren: () => import('./modules/why-hcn/why-hcn.module').then(m => m.WhyHCNModule) },
  { path: 'aboutHcn', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
  { path: 'degreePrograms', loadChildren: () => import('./modules/degree-program/degree-program.module').then(m => m.DegreeProgramModule) }
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top' // it will move page to top if we navigate
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
