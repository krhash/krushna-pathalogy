import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-urinalysis',
  templateUrl: './urinalysis.component.html',
  styleUrls: ['./urinalysis.component.css']
})

export class UrinalysisComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  saveToPDF(urinalysisForm : any) {
    console.warn(urinalysisForm);
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [297, 210],
    });
    doc.setLineHeightFactor(1.5);
    doc.setFont('courier', 'bold');

    // Add report header
    doc.setFontSize(14);
    doc.text("Name: " + urinalysisForm.name.trim(), 10, 45);
    doc.text("Date: " + `${urinalysisForm.date.day}/${urinalysisForm.date.month}/${urinalysisForm.date.year}`, 150, 45);
    doc.text("Referred By: " + urinalysisForm.referredBy.trim(), 10, 55);

    // Add report title
    const reportTitle = "URINALYSIS";
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 75);

    // Add Report Content
    doc.setFontSize(16);
    doc.setDrawColor(0);
    doc.setFillColor	(211, 211, 211);
    doc.rect(10, 85, doc.getStringUnitWidth(" Physical Examination ")*doc.getFontSize()/doc.internal.scaleFactor, 7, 'FD'); //Fill and Border
    doc.text(" Physical Examination ", 10, 90);
    doc.setFontSize(14);
    doc.text([
      `General Features  -  ${urinalysisForm.generalFeatures}`,
      `pH                -  ${urinalysisForm.ph}`,
      `Specific Gravity  -  ${urinalysisForm.specificGravity}`
    ], 10, 100)

    doc.setFontSize(16);
    doc.setDrawColor(0);
    doc.setFillColor	(211, 211, 211);
    doc.rect(10, 130, doc.getStringUnitWidth(" Chemical Examination ")*doc.getFontSize()/doc.internal.scaleFactor, 7, 'FD'); //Fill and Border
    doc.text(" Chemical Examination ", 10, 135);
    doc.setFontSize(14);
    doc.text([
      `Albium         -   ${urinalysisForm.albium}`,
      `Sugar          -   ${urinalysisForm.sugar}`,
      `Bile Salts     -   ${urinalysisForm.bileSalts}`,
      `Bilirubin      -   ${urinalysisForm.bilirubin}`,
      `Urobilinogen   -   ${urinalysisForm.urobilinogen}`
    ], 10, 145)

    doc.setFontSize(16);
    doc.setDrawColor(0);
    doc.setFillColor	(211, 211, 211);
    doc.rect(10, 190, doc.getStringUnitWidth(" Microscopic Examination ")*doc.getFontSize()/doc.internal.scaleFactor, 7, 'FD'); //Fill and Border
    doc.text(" Microscopic Examination ", 10, 195);
    doc.setFontSize(14);
    doc.text([
      `Red Cells         -  ${urinalysisForm.redCells} /H.P.F`,
      `Pus Cells         -  ${urinalysisForm.pusCells} /H.P.F`,
      `Epithelial Cells  -  ${urinalysisForm.epithelialCells} /H.P.F`,
      `Casts             -  ${urinalysisForm.casts}`,
      `Crystals          -  ${urinalysisForm.crystals}`,
      `Other Findings    -  ${urinalysisForm.otherFindings}`
    ], 10, 205)

    doc.save(urinalysisForm.name.trim().toLowerCase().replace(" ", "_") + `_${urinalysisForm.date.day}_${urinalysisForm.date.month}_${urinalysisForm.date.year}.pdf`);
  }

}
