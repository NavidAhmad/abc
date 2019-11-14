import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DegreeProgramRoutingModule } from './degree-program-routing.module';
import { DegreeProgramComponent } from './degree-program.component';
import { GenericBsnComponent } from './generic-bsn/generic-bsn.component';
import { PostRNComponent } from './post-rn/post-rn.component';
import { DegreeNotoundPageComponent } from './degree-notound-page/degree-notound-page.component';
import { ExploreHCNModule } from '../../shared/explore-hcn/explore-hcn.module';


@NgModule({
  declarations: [DegreeProgramComponent, GenericBsnComponent, PostRNComponent, DegreeNotoundPageComponent],
  imports: [
    CommonModule,
    DegreeProgramRoutingModule,
    ExploreHCNModule
  ]
})
export class DegreeProgramModule { }
