import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyHCNRoutingModule } from './why-hcn-routing.module';
import { WhyHCNComponent } from './why-hcn.component';


@NgModule({
  declarations: [WhyHCNComponent],
  imports: [
    CommonModule,
    WhyHCNRoutingModule
  ]
})
export class WhyHCNModule { }
