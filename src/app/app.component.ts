import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { UrinalysisComponent } from './reports/urinalysis/urinalysis.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Krushna Pathalogy';
  selectedReport : String = "";

  constructor(private resolver: ComponentFactoryResolver) {

  }

  receiveSelectedReport(selectedReport: String) {  
      this.selectedReport = selectedReport;
  }  

}
