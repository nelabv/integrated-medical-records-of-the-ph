import PDFDocument from "pdfkit";
import FileHandler from "../fileHandler.js";
import { v4 as uuidv4 } from 'uuid';

export default class FileGenerators {
  static async medicalPrescription(req, res) {
    const { patientID } = req.query;
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

      filename = encodeURIComponent(filename) + '.pdf'
      const content = req.body.content
      doc.y = 300
      doc.text(content, 50, 50)
      doc.end();

    const fileName = `RX_${today}_${uuidv4()}.pdf`; // File location is patient first and last name

    FileHandler.uploadToBucket(patientID, fileName, doc)
      .catch(() => {
        res.status(500).json({
          message: `Unknown error occurred`
        })
      })

    doc.pipe(res)
  }
}