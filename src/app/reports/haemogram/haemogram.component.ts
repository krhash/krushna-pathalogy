import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-haemogram',
  templateUrl: './haemogram.component.html',
  styleUrls: ['./haemogram.component.css']
})
export class HaemogramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveToPDF(haemogramForm : any) {
    console.warn(haemogramForm);
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [297, 210],
    });
    doc.setLineHeightFactor(2);

    // Add report header
    doc.setFont('courier', 'normal');
    doc.setFontSize(14);
    doc.text("Name: " + haemogramForm.name.trim(), 10, 50);
    doc.text("Date: " + `${haemogramForm.date.day}/${haemogramForm.date.month}/${haemogramForm.date.year}`, 150, 50);
    doc.text("Referred By: " + haemogramForm.referredBy.trim(), 10, 60);

    // Add report title
    const reportTitle = "HAEMOGRAM";
    doc.setFont('courier', 'bold');
    doc.setFontSize(20);
    const pageWidth = doc.internal.pageSize.width;
    const txtWidth = doc.getStringUnitWidth(reportTitle)*doc.getFontSize()/doc.internal.scaleFactor;
    const titleXOffset = ( pageWidth - txtWidth ) / 2;
    doc.text(reportTitle, titleXOffset, 85);

    // Add Report Content
    doc.setFontSize(14);
    doc.setFont('courier', 'normal');

    let hbReading = [
      ` HAEMOGLOBIN                   -     ${haemogramForm.haemoglobin} gm %`,
    ];
    doc.text(hbReading, 10, 125);

    let hbDetails = [
      
      `(cyanmethaemoglogin method)          Normal:`, 
      `                                     Male   - 13 to 18 gm%`,
      `                                     Female - 11 to 16 gm%`,
    ];
    doc.setLineHeightFactor(0.9);
    doc.text(hbDetails, 10, 133);

    let plateletReading = [
      ` PLATELET COUNT                -     ${haemogramForm.platelet} Lac/cmm`
    ];
    doc.setLineHeightFactor(2);
    doc.text(plateletReading, 10, 160);

    let plateletDetails = [
      `                                     Normal: 1.5 to 4 Lac/cmm`
    ];
    doc.setLineHeightFactor(0.9);
    doc.text(plateletDetails, 10, 168);

    let otherReadings = [
      ` BLOOD GROUP                   -      '${haemogramForm.bloodGroup}'`,
      ` Rh. FACTOR                    -      ${haemogramForm.rhFactor}`,
    ];
    doc.setLineHeightFactor(2);
    doc.text(otherReadings, 10, 190);

    let esrReading = [
      ` E.S.R                         -      ${haemogramForm.esr} mm`
    ];
    doc.setLineHeightFactor(2);
    doc.text(esrReading, 10, 215);

    let esrDetails = [
      `(westegren, 1hr.)                     Normal:`,
      `                                      Male   - 0 to 5 mm`,
      `                                      Female - 0 to 7 mm`
    ];
    doc.setLineHeightFactor(0.9);
    doc.text(esrDetails, 10, 223);

    doc.save(haemogramForm.name.trim().toLowerCase().replace(" ", "_") + `_${haemogramForm.date.day}_${haemogramForm.date.month}_${haemogramForm.date.year}.pdf`);
  }
}
