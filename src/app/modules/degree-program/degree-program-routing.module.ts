import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DegreeProgramComponent } from './degree-program.component';
import { GenericBsnComponent } from './generic-bsn/generic-bsn.component';
import { PostRNComponent } from './post-rn/post-rn.component';
import { DegreeNotoundPageComponent } from './degree-notound-page/degree-notound-page.component';

const routes: Routes = [{ path: '', component: DegreeProgramComponent,children:[
  {path:'generic-bsn',component:GenericBsnComponent},
  {path:'post-rn',component:PostRNComponent},
  {path:'',redirectTo:'generic-bsn', pathMatch:'full'},
  {path:'**',component:DegreeNotoundPageComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DegreeProgramRoutingModule { }
