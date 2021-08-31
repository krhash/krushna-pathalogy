import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrinalysisComponent } from './urinalysis/urinalysis.component';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SugarComponent } from './sugar/sugar.component';
import { WidalComponent } from './widal/widal.component';

@NgModule({
  declarations: [
    UrinalysisComponent,
    SugarComponent,
    WidalComponent
  ],
  exports: [
    UrinalysisComponent,
    SugarComponent,
    WidalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class ReportsModule { }
