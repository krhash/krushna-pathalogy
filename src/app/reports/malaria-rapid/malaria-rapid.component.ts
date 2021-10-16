import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-malaria-rapid',
  templateUrl: './malaria-rapid.component.html',
  styleUrls: ['./malaria-rapid.component.css']
})
export class MalariaRapidComponent implements OnInit {

  testMalariaAntigen : string;
  method : string;

  constructor() { 
    this.testMalariaAntigen = "DETECTING INFECTION WITH P.Falciparam & P.Vivax              MALARIAL PARASITE";
    this.method = "RAPID DIAGNOSTIC KIT";
  }

  ngOnInit(): void {
  }

  saveToPDF(malariaRapidForm : any) {
    console.warn(malariaRapidForm);
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [297, 210],
    });
    doc.setLineHeightFactor(2);
    doc.setFont('courier', 'bold');

    // Add report header
    doc.setFontSize(14);
    doc.text("Name: " + malariaRapidForm.name.trim(), 10, 45);
    doc.text("Date: " + `${malariaRapidForm.date.day}/${malariaRapidForm.date.month}/${malariaRapidForm.date.year}`, 150, 45);
    doc.text("Referred By: " + malariaRapidForm.referredBy.trim(), 10, 55);

    // Add report title
    const reportTitle = "MALARIA RAPID TEST REPORT";
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 85);

    if (malariaRapidForm.resultMalariaAntigen && malariaRapidForm.resultMalariaAntigen.trim() !== "")
    {
      // Add NS1 Report Content
      doc.setFontSize(16);
      doc.setDrawColor(0);
      doc.setFillColor	(211, 211, 211);
      doc.rect(10, 105, 185, 7, 'FD'); //Fill and Border
      const titleXOffset = (pageWidth - doc.getStringUnitWidth(" MALARIAL ANTIGEN TEST ")*doc.getFontSize()/doc.internal.scaleFactor) / 2;
      doc.text(" MALARIAL ANTIGEN TEST ", titleXOffset, 110);
      doc.setFontSize(14);

      let readingMalaria = [];
      readingMalaria.push(`RESULT  -  ${malariaRapidForm.resultMalariaAntigen}`)
      readingMalaria.push(`---------------------------------------------`);
      readingMalaria.push(`METHOD  -  ${this.method}`)

      doc.text(doc.splitTextToSize(`TEST    -  ${this.testMalariaAntigen}`, 180), 10, 125);
      doc.text(readingMalaria, 10, 145);

      doc.save(malariaRapidForm.name.trim().toLowerCase().replace(" ", "_") + `_${malariaRapidForm.date.day}_${malariaRapidForm.date.month}_${malariaRapidForm.date.year}.pdf`);
    }
    else {
      window.alert("Please select test result")
    }

  }

}
