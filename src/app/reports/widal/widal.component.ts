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
    doc.setFont('courier', 'bold');

    // Add report header
    doc.setFontSize(14);
    doc.text("Name: " + widalForm.name.trim(), 10, 45);
    doc.text("Date: " + `${widalForm.date.day}/${widalForm.date.month}/${widalForm.date.year}`, 150, 45);
    doc.text("Referred By: " + widalForm.referredBy.trim(), 10, 55);

    // Add report title
    const reportTitle = "WIDAL TEST REPORT";
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 85);

    // Add Report Content
    doc.setFontSize(14);

    let readings = [
      `S.Typhi ' O '           -     ${widalForm.sTyphiO}`,
      `S.Typhi ' H '           -     ${widalForm.sTyphiH}`,
      `S.Paratyphi ' AH '      -     ${widalForm.sParatyphiAH}`,
      `S.Paratyphi ' BH '      -     ${widalForm.sParatyphiBH}`,
      `OPINION                 -     ${widalForm.opinion}`
    ];

    if (widalForm.peripheralSmear && widalForm.peripheralSmear !== "")
    {
      readings.push(`PERIPHERAL-SMEAR        -     ${widalForm.peripheralSmear}`);
    }

    doc.text(readings, 10, 125);

    doc.save(widalForm.name.trim().toLowerCase().replace(" ", "_") + `_${widalForm.date.day}_${widalForm.date.month}_${widalForm.date.year}.pdf`);
  }
}
