import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.css']
})
export class ReportSelectorComponent implements OnInit {

  
  selectedReport: String = "";
  @Output() selectedReportEmitter = new EventEmitter < String > ();  

  constructor() { }
  
  setSelectedReport(selectedReport: String) {
    this.selectedReport = selectedReport;
  }

  postSelectedReport()
  {
    this.selectedReportEmitter.emit(this.selectedReport);
  }

  ngOnInit(): void {
  }

}
