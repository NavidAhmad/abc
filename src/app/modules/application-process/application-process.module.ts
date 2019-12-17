import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreHCNModule } from '../../shared/explore-hcn/explore-hcn.module';

import { ApplicationProcessRoutingModule } from './application-process-routing.module';
import { ApplicationProcessComponent } from './application-process.component';


@NgModule({
  declarations: [ApplicationProcessComponent],
  imports: [
    CommonModule,
    ApplicationProcessRoutingModule,
    ExploreHCNModule
  ]
})
export class ApplicationProcessModule { }
