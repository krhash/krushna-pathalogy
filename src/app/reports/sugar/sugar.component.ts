import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-sugar',
  templateUrl: './sugar.component.html',
  styleUrls: ['./sugar.component.css']
})
export class SugarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveToPDF(sugarForm : any) {
    console.warn(sugarForm);
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [297, 210],
    });
    doc.setLineHeightFactor(2);
    doc.setFont('courier', 'bold');

    // Add report header
    doc.setFontSize(14);
    doc.text("Name: " + sugarForm.name.trim(), 10, 45);
    doc.text("Date: " + `${sugarForm.date.day}/${sugarForm.date.month}/${sugarForm.date.year}`, 150, 45);
    doc.text("Referred By: " + sugarForm.referredBy.trim(), 10, 55);

    // Add report title
    const reportTitle = "R E P O R T";
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 85);

    // Add Report Content
    doc.setFontSize(16);
    doc.text("BLOOD SUGAR", 10, 110);
    doc.setFontSize(14);

    let readings = [];

    if (sugarForm.random && sugarForm.random.trim() !== "")
    {
      readings.push(`Random       -     ${sugarForm.random} mg %  (Normal: Upto 160 mg %)`)
    }
    
    if (sugarForm.fasting && sugarForm.fasting.trim() !== "")
    {
      readings.push(`Fasting      -     ${sugarForm.fasting} mg %  (Normal: 80 to 120 mg %)`)
    }

    if (sugarForm.postMeal && sugarForm.postMeal.trim() !== "")
    {
      readings.push(`Post-Meal    -     ${sugarForm.postMeal} mg %  (Normal: 120 to 180 mg %)`)
    }

    doc.text(readings, 10, 130);

    doc.save(sugarForm.name.trim().toLowerCase().replace(" ", "_") + `_${sugarForm.date.day}_${sugarForm.date.month}_${sugarForm.date.year}.pdf`);
  }
}
