import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-widal',
  templateUrl: './widal.component.html',
  styleUrls: ['./widal.component.css']
})
export class WidalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveToPDF(widalForm : any) {
    console.warn(widalForm);
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [297, 210],
    });
    doc.setLineHeightFactor(2);

    // Add report header
    doc.setFont('courier', 'normal');
    doc.setFontSize(14);
    doc.text("Name: " + widalForm.name.trim(), 10, 50);
    doc.text("Date: " + `${widalForm.date.day}/${widalForm.date.month}/${widalForm.date.year}`, 150, 50);
    doc.text("Referred By: " + widalForm.referredBy.trim(), 10, 60);

    // Add report title
    const reportTitle = "WIDAL TEST REPORT";
    doc.setFont('courier', 'bold');
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 85);

    // Add Report Content
    doc.setFontSize(14);
    doc.setFont('courier', 'normal');

    let readings = [
      `S.Typhi ' O '           -     ${widalForm.sTyphiO}`,
      `S.Typhi ' H '           -     ${widalForm.sTyphiH}`,
      `S.Paratyphi ' AH '      -     ${widalForm.sParatyphiAH}`,
      `S.Paratyphi ' BH '      -     ${widalForm.sParatyphiBH}`
    ];

    doc.text(readings, 10, 125);

    doc.save(widalForm.name.trim().toLowerCase().replace(" ", "_") + `_${widalForm.date.day}_${widalForm.date.month}_${widalForm.date.year}.pdf`);
  }
}
