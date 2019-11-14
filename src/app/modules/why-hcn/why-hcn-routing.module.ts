import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyHCNComponent } from './why-hcn.component';

const routes: Routes = [{ path: '', component: WhyHCNComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyHCNRoutingModule { }
