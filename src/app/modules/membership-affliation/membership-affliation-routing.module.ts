import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipAffliationComponent } from './membership-affliation.component';

const routes: Routes = [{ path: '', component: MembershipAffliationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipAffliationRoutingModule { }
