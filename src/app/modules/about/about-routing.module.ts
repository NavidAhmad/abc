import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { HcnIntroComponent } from './hcn-intro/hcn-intro.component';
import { HcnMissionComponent } from './hcn-mission/hcn-mission.component';
import { HcnObjectivesComponent } from './hcn-objectives/hcn-objectives.component';
import { HcnProfesionalValuesComponent } from './hcn-profesional-values/hcn-profesional-values.component';
import { AboutPageNotFound404Component } from './about-page-not-found404/about-page-not-found404.component';
import { HcnVissionComponent } from './hcn-vission/hcn-vission.component';

const routes: Routes = [{ path: '', component: AboutComponent,children:[
  {path:'hcn-introduction',component:HcnIntroComponent},
  { path:'hcn-mission',component:HcnMissionComponent},
  {path:'hcn-objectives',component:HcnObjectivesComponent},
  {path:'hcn-professional-values',component:HcnProfesionalValuesComponent},
  {path:'hcn-vision',component:HcnVissionComponent},
  {path:'',redirectTo:'hcn-introduction', pathMatch:'full'},
  {path:'**',component:AboutPageNotFound404Component}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
