import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-anc',
  templateUrl: './anc.component.html',
  styleUrls: ['./anc.component.css']
})
export class AncComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveToPDF(ancForm : any) {
    console.warn(ancForm);
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [297, 210],
    });
    doc.setLineHeightFactor(2);
    doc.setFont('courier', 'bold');

    // Add report header
    doc.setFontSize(14);
    doc.text("Name: " + ancForm.name.trim(), 10, 45);
    doc.text("Date: " + `${ancForm.date.day}/${ancForm.date.month}/${ancForm.date.year}`, 150, 45);
    doc.text("Referred By: " + ancForm.referredBy.trim(), 10, 55);

    // Add report title
    const reportTitle = "R E P O R T";
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 85);

    // Add Report Content
    doc.setFontSize(14);

    let readings = [
      `Blood VDRL Test          -   ${ancForm.bloodVdrlTest}`,
      `Blood Group              -   ' ${ancForm.bloodGroup} '`,
      `RH Type                  -   ${ancForm.rhType}`,
      `Australia Antigen        -   ${ancForm.australiaAntigen}`,
      `Serum HIV Test           -   ${ancForm.serumHIVTest}`,
      `Haemoglobin %            -   ${ancForm.haemoglobin} gm %  (Normal: 11 to 16 gm %)`
    ];

    if (ancForm.random && ancForm.random.trim() !== "")
    {
      readings.push(`Blood Sugar (Random)     -   ${ancForm.random} mg %  (Normal: Upto 160 mg %)`)
    }

    if (ancForm.fasting && ancForm.fasting.trim() !== "")
    {
      readings.push(`Blood Sugar (Fasting)    -   ${ancForm.fasting} mg %  (Normal: 80 to 120 mg %)`)
    }

    if (ancForm.postMeal && ancForm.postMeal.trim() !== "")
    {
      readings.push(`Blood Sugar (Post-Meal)  -   ${ancForm.postMeal} mg %  (Normal: 120 to 180 mg %)`)
    }

    doc.text(readings, 10, 120);

    doc.save(ancForm.name.trim().toLowerCase().replace(" ", "_") + `_${ancForm.date.day}_${ancForm.date.month}_${ancForm.date.year}.pdf`);
  }
}
