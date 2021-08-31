import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportsModule } from './reports/reports.module';
import { ReportSelectorComponent } from './report-selector/report-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportSelectorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
