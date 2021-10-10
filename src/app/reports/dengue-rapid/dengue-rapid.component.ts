import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-dengue-rapid',
  templateUrl: './dengue-rapid.component.html',
  styleUrls: ['./dengue-rapid.component.css']
})
export class DengueRapidComponent implements OnInit {

  testNs1: string;
  testIggIgm: string;
  methodNs1: string;
  methodIggIgm: string;
  isNs1Evaluated: boolean;

  constructor() {
    this.testNs1 = "EVALUATION OF DENGUE NS1";
    this.testIggIgm = "EVALUATION OF IgG - IgM ANTIBODIES TO DENGUE VIRUS";
    this.methodNs1 = "IMMUNOCHROMATOGRAPHY RAPID TEST";
    this.methodIggIgm = "IMMUNOCHROMATOGRAPHY RAPID TEST";
    this.isNs1Evaluated = false;
  }

  ngOnInit(): void {
  }

  saveToPDF(dengueRapidForm : any) {
    console.warn(dengueRapidForm);
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [297, 210],
    });
    doc.setLineHeightFactor(2);
    doc.setFont('courier', 'bold');

    // Add report header
    doc.setFontSize(14);
    doc.text("Name: " + dengueRapidForm.name.trim(), 10, 45);
    doc.text("Date: " + `${dengueRapidForm.date.day}/${dengueRapidForm.date.month}/${dengueRapidForm.date.year}`, 150, 45);
    doc.text("Referred By: " + dengueRapidForm.referredBy.trim(), 10, 55);

    // Add report title
    const reportTitle = "DENGUE RAPID TEST REPORT";
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 85);

    if (dengueRapidForm.resultNs1 && dengueRapidForm.resultNs1.trim() !== "")
    {
      // Add NS1 Report Content
      doc.setFontSize(16);
      doc.setDrawColor(0);
      doc.setFillColor	(211, 211, 211);
      doc.rect(10, 105, 185, 7, 'FD'); //Fill and Border
      const ns1TitleXOffset = (pageWidth - doc.getStringUnitWidth(" DENGUE NS1 ")*doc.getFontSize()/doc.internal.scaleFactor) / 2;
      doc.text(" DENGUE NS1 ", ns1TitleXOffset, 110);
      doc.setFontSize(14);

      let readingsNs1 = [];

      readingsNs1.push(`TEST    -  ${this.testNs1}`)
      readingsNs1.push(`RESULT  -  ${dengueRapidForm.resultNs1}`)
      readingsNs1.push(`---------------------------------------------`);
      readingsNs1.push(`METHOD  -  ${this.methodNs1}`)

      doc.text(readingsNs1, 10, 125);

      this.isNs1Evaluated = true;
    }

    if ((dengueRapidForm.resultIgg && dengueRapidForm.resultIgg.trim() !== "")  || 
        (dengueRapidForm.resultIgm && dengueRapidForm.resultIgm.trim() !== ""))
    {
      // Add IgG-IgM Report Content
      doc.setFontSize(16);
      doc.setDrawColor(0);
      doc.setFillColor	(211, 211, 211);
      doc.rect(10, this.isNs1Evaluated ? 175 : 105, 185, 7, 'FD'); //Fill and Border
      const iggIgmTitleXOffset = (pageWidth - doc.getStringUnitWidth(" DENGUE VIRUS EVALUATION OF IgG - IgM ")*doc.getFontSize()/doc.internal.scaleFactor) / 2;
      doc.text(" DENGUE VIRUS EVALUATION OF IgG - IgM ", iggIgmTitleXOffset, this.isNs1Evaluated ? 180 : 110);
      doc.setFontSize(14);

      let readingsIggIgm = [];

      readingsIggIgm.push(`TEST    -  ${this.testIggIgm}`)
      readingsIggIgm.push(`RESULT  -  ${dengueRapidForm.resultIgg}`)
      readingsIggIgm.push(`           ${dengueRapidForm.resultIgm}`)
      readingsIggIgm.push(`---------------------------------------------`);
      readingsIggIgm.push(`METHOD  -  ${this.methodIggIgm}`)

      doc.text(readingsIggIgm, 10, this.isNs1Evaluated ? 195 : 125);
    }
    

    doc.save(dengueRapidForm.name.trim().toLowerCase().replace(" ", "_") + `_${dengueRapidForm.date.day}_${dengueRapidForm.date.month}_${dengueRapidForm.date.year}.pdf`);
  }
}
