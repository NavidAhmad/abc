import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationProcessComponent } from './application-process.component';

import { AdmissionsComponent } from './addmissions/addmissions.component';
import { AdmissionPolicyComponent } from './admission-policy/admission-policy.component';
import { AdmissionToGenericBSNComponent } from './admission-to-generic-bsn/admission-to-generic-bsn.component';
import { AdmissionToPostRNComponent } from './admission-to-post-rn/admission-to-post-rn.component';
import { SelectionCreteriaComponent } from './selection-creteria/selection-creteria.component';
import { AdmissionProcessNotFoundComponent } from './admission-process-not-found/admission-process-not-found.component';

const routes: Routes = [{ path: '', component: ApplicationProcessComponent, children:[
  {path:'',redirectTo:'admission', pathMatch:'full'},
  {path:'admission',component:AdmissionsComponent},
  {path:'admission-policy',component:AdmissionPolicyComponent},
  {path:'selection-criteria',component:SelectionCreteriaComponent},
  {path:'generic-bsn',component:AdmissionToGenericBSNComponent},
  {path:'post-rn',component:AdmissionToPostRNComponent},
  {path:'**',component:AdmissionProcessNotFoundComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AdmissionsComponent, SelectionCreteriaComponent, AdmissionPolicyComponent,
  AdmissionToPostRNComponent,AdmissionToGenericBSNComponent,AdmissionProcessNotFoundComponent]
})
export class ApplicationProcessRoutingModule { }
