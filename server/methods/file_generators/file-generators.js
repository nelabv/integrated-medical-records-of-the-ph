import PDFDocument from "pdfkit";
import fs from 'fs'

export default class FileGenerators {
  static async medicalPrescription(req, res) {
    const { name, specialization, phoneNumber, email, patientFirstName, patientLastName, patientAge, patientSex, medications } = req.body; 

    const PALETTE = {
      blackCoral: '#646E78',
      cadetGray: '#8D98A7',
      almond: '#DCCCBB'
    }
  
    const today = new Date().toLocaleDateString('en-GB', {
      day : 'numeric',
      month : 'short',
      year : 'numeric'
    }).split(' ').join('-');

    const doc = new PDFDocument({size: 'A5'})
    let filename = req.body.filename;

    // Header 
    doc.fillColor(PALETTE.blackCoral)
      .fontSize(14)
      .font('Helvetica-Bold')
      .text(`Dr. ${name}` , 20, 20, {
        lineBreak: true, 
        lineGap: 1
      })
      .moveDown(0.25)
      .fontSize(10)
      .font('Helvetica')
      .text(`${specialization}`, {
        lineBreak: true, 
        lineGap: 1
      })
      .moveDown(0.5)
      .fontSize(8)
      .fillColor(PALETTE.cadetGray)
      .text(`Phone: ${phoneNumber}`, {
        lineBreak: true, 
        lineGap: 1
      })
      .moveDown(0.25)
      .text(`E-mail: ${email}`, {
        lineBreak: true, 
        lineGap: 1
      })
      .moveDown(1)

    // Border
    doc.rect(20, 90, 375, 5).fill(PALETTE.cadetGray)
      .moveDown(1)

    // Patient Information
    .fontSize(10)
    .fillColor(PALETTE.cadetGray)
    .text(`Patient Name: ${patientFirstName} ${patientLastName}`, {
      lineBreak: true, 
      lineGap: 1
    })
    .fontSize(10)
    .fillColor(PALETTE.cadetGray)
    .text(`Age: ${patientAge} / ${patientSex}`, {
      lineBreak: true, 
      lineGap: 1
    })
      .text(`Date: ${today}`)

    // Rx logo
      doc.image('images/rx.jpg', 20, 150, {fit: [30, 30]})

    // Medications for Patient
    doc.fontSize(12)
      .text(medications, 20, 210)


/*     // Code for creating a blob on the browser for user's view
    
    filename = encodeURIComponent(filename) + '.pdf'
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    res.setHeader('Content-type', 'application/pdf')
    const content = req.body.content
    doc.y = 300
    doc.text(content, 50, 50)
    doc.pipe(res)
    doc.end() */

    const fileName = `RX_${today}_${patientFirstName + patientLastName}.pdf`;

    doc.pipe(fs.createWriteStream(`files/${fileName}`));
    doc.end();
  }
}