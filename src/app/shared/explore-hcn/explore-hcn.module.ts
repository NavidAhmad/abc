import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreHCNRoutingModule } from './explore-hcn-routing.module';
import { ExploreHCNComponent } from '../../shared/explore-hcn/explore-hcn.component';


@NgModule({
  declarations:[ExploreHCNComponent],
  exports: [
    CommonModule,
    ExploreHCNComponent]
})
export class ExploreHCNModule { }
