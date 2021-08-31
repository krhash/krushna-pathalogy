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

    // Add report header
    doc.setFont('courier', 'normal');
    doc.setFontSize(14);
    doc.text("Name: " + sugarForm.name.trim(), 10, 50);
    doc.text("Date: " + `${sugarForm.date.day}/${sugarForm.date.month}/${sugarForm.date.year}`, 150, 50);
    doc.text("Referred By: " + sugarForm.referredBy.trim(), 10, 60);

    // Add report title
    const reportTitle = "R E P O R T";
    doc.setFont('courier', 'bold');
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 85);

    // Add Report Content
    doc.setFontSize(16);
    doc.setFont('courier', 'bold');
    doc.text("Blood Sugar", 10, 110);
    doc.setFontSize(14);
    doc.setFont('courier', 'normal');

    let readings = [];

    if (sugarForm.fasting && sugarForm.fasting.trim() !== "")
    {
      readings.push(`Fasting      -     ${sugarForm.fasting} mg %  (Normal - 80 to 120 mg %)`)
    }

    if (sugarForm.postMeal && sugarForm.postMeal.trim() !== "")
    {
      readings.push(`Post-Meal    -     ${sugarForm.postMeal} mg %  (Normal - 120 to 180 mg %)`)
    }

    if (sugarForm.random && sugarForm.random.trim() !== "")
    {
      readings.push(`Random       -     ${sugarForm.random} mg %  (Normal - 80 to 120 mg %)`)
    }

    doc.text(readings, 10, 125);

    doc.save(sugarForm.name.trim().toLowerCase().replace(" ", "_") + `_${sugarForm.date.day}_${sugarForm.date.month}_${sugarForm.date.year}`);
  }
}
