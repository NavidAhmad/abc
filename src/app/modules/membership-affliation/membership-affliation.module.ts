import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipAffliationRoutingModule } from './membership-affliation-routing.module';
import { MembershipAffliationComponent } from './membership-affliation.component';


@NgModule({
  declarations: [MembershipAffliationComponent],
  imports: [
    CommonModule,
    MembershipAffliationRoutingModule
  ]
})
export class MembershipAffliationModule { }
