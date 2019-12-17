import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcnHomeComponent } from './components/hcn-home/hcn-home.component';


const routes: Routes = [
  {path:'', component:HcnHomeComponent},
  { path: 'hcn', redirectTo: '/', pathMatch: 'full' },
  { path: 'whyHCN', loadChildren: () => import('./modules/why-hcn/why-hcn.module').then(m => m.WhyHCNModule) },
  { path: 'aboutHcn', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
  { path: 'degreePrograms', loadChildren: () => import('./modules/degree-program/degree-program.module').then(m => m.DegreeProgramModule) },
  { path: 'MEMBERSHIPAFFILIATION', loadChildren: () => import('./modules/membership-affliation/membership-affliation.module').then(m => m.MembershipAffliationModule) },
  { path: 'applicationProcess', loadChildren: () => import('./modules/application-process/application-process.module').then(m => m.ApplicationProcessModule) }
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top' // it will move page to top if we navigate
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
