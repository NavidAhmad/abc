import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import { AboutPageNotFound404Component } from './about-page-not-found404/about-page-not-found404.component';
import { HcnIntroComponent } from './hcn-intro/hcn-intro.component';
import { HcnMissionComponent } from './hcn-mission/hcn-mission.component';
import { HcnObjectivesComponent } from './hcn-objectives/hcn-objectives.component';
import { HcnProfesionalValuesComponent } from './hcn-profesional-values/hcn-profesional-values.component';
import { HcnVissionComponent } from './hcn-vission/hcn-vission.component';
import { ExploreHCNModule } from '../../shared/explore-hcn/explore-hcn.module';

@NgModule({
  declarations: [AboutComponent, HcnIntroComponent, HcnMissionComponent, HcnVissionComponent, HcnProfesionalValuesComponent,
    HcnObjectivesComponent, AboutPageNotFound404Component
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ExploreHCNModule
  ]
})
export class AboutModule { }

