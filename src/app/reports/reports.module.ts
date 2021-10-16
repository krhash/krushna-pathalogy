import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrinalysisComponent } from './urinalysis/urinalysis.component';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SugarComponent } from './sugar/sugar.component';
import { WidalComponent } from './widal/widal.component';
import { HaemogramComponent } from './haemogram/haemogram.component';
import { AncComponent } from './anc/anc.component';
import { DengueRapidComponent } from './dengue-rapid/dengue-rapid.component';
import { MalariaRapidComponent } from './malaria-rapid/malaria-rapid.component';

@NgModule({
  declarations: [
    UrinalysisComponent,
    SugarComponent,
    WidalComponent,
    HaemogramComponent,
    AncComponent,
    DengueRapidComponent,
    MalariaRapidComponent
  ],
  exports: [
    AncComponent,
    UrinalysisComponent,
    SugarComponent,
    WidalComponent,
    HaemogramComponent,
    DengueRapidComponent,
    MalariaRapidComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class ReportsModule { }
