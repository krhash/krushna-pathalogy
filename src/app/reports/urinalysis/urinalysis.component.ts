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

    // Add report header
    doc.setFont('courier', 'normal');
    doc.setFontSize(14);
    doc.text("Name: " + urinalysisForm.name.trim(), 10, 50);
    doc.text("Date: " + `${urinalysisForm.date.day}/${urinalysisForm.date.month}/${urinalysisForm.date.year}`, 150, 50);
    doc.text("Referred By: " + urinalysisForm.referredBy.trim(), 10, 60);

    // Add report title
    const reportTitle = "URINALYSIS";
    doc.setFont('courier', 'bold');
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 75);

    // Add Report Content
    doc.setFontSize(16);
    doc.setFont('courier', 'bold');
    doc.text("Physical Examination", 10, 90);
    doc.setFontSize(14);
    doc.setFont('courier', 'normal');
    doc.text([
      `General Features - ${urinalysisForm.generalFeatures}`,
      `pH               - ${urinalysisForm.ph}`,
      `Specific Gravity - ${urinalysisForm.specificGravity}`
    ], 10, 100)

    doc.setFontSize(16);
    doc.setFont('courier', 'bold');
    doc.text("Chemical Examination", 10, 135);
    doc.setFontSize(14);
    doc.setFont('courier', 'normal');
    doc.text([
      `Albium       - ${urinalysisForm.albium}`,
      `Sugar        - ${urinalysisForm.sugar}`,
      `Bile Salts   - ${urinalysisForm.bileSalts}`,
      `Bilirubin    - ${urinalysisForm.bilirubin}`,
      `Urobilinogen - ${urinalysisForm.urobilinogen}`
    ], 10, 145)

    doc.setFontSize(16);
    doc.setFont('courier', 'bold');
    doc.text("Microscopic Examination", 10, 195);
    doc.setFontSize(14);
    doc.setFont('courier', 'normal');
    doc.text([
      `Red Cells        - ${urinalysisForm.redCells} /H.P.F`,
      `Pus Cells        - ${urinalysisForm.pusCells} /H.P.F`,
      `Epithelial Cells - ${urinalysisForm.epithelialCells} /H.P.F`,
      `Casts            - ${urinalysisForm.casts}`,
      `Crystals         - ${urinalysisForm.crystals}`,
      `Other Findings   - ${urinalysisForm.otherFindings}`
    ], 10, 205)

    doc.save(urinalysisForm.name.trim().toLowerCase().replace(" ", "_") + `_${urinalysisForm.date.day}_${urinalysisForm.date.month}_${urinalysisForm.date.year}.pdf`);
  }

}
