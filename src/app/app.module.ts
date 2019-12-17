import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HcnHomeComponent } from './components/hcn-home/hcn-home.component';
import { AppFooterComponent } from './shared/app-footer/app-footer.component';
import { AppHeaderComponent } from './shared/app-header/app-header.component';
import { ExploreHCNModule } from './shared/explore-hcn/explore-hcn.module';
import { FooterTopComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavBarComponent,
    HcnHomeComponent,
    // FooterComponent
    AppHeaderComponent,
    AppFooterComponent,
    FooterTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    HttpClientModule,
    ExploreHCNModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
