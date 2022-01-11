import PDFDocument from "pdfkit";
import { User } from "../../models/index.js"
import FileHandler from "../fileHandler.js";
import SharedAPI from "../shared.js";

export default class FileGenerators {
  static async medicalPrescription(req, res, PATIENT_ID, PHYSICIAN_INFO) {
    const PATIENT_INFO = await User.findOne({ patientID: PATIENT_ID });
    const { medications, patientAge } = req.body;

    const today = new Date().toLocaleDateString('en-GB', {
      day : 'numeric',
      month : 'short',
      year : 'numeric'
    }).split(' ').join('-');

    const PALETTE = {
      blackCoral: '#646E78',
      cadetGray: '#8D98A7',
      almond: '#DCCCBB'
    }

    const doc = new PDFDocument({size: 'A5'})
    let filename = req.body.filename;

    const age = await SharedAPI.computeYearsBetweenTwoDates(PATIENT_INFO.birthdate, 2021);

    // Header 
    doc.fillColor(PALETTE.blackCoral)
      .fontSize(14)
      .font('Helvetica-Bold')
      .text(`Dr. ${PHYSICIAN_INFO.firstName} ${PHYSICIAN_INFO.lastName}` , 20, 20, {
        lineBreak: true, 
        lineGap: 1
      })
      .moveDown(0.25)
      .fontSize(10)
      .font('Helvetica')
      .text(`${PHYSICIAN_INFO.specialization}`, {
        lineBreak: true, 
        lineGap: 1
      })
      .moveDown(0.5)
      .fontSize(8)
      .fillColor(PALETTE.cadetGray)
      .text(`Physician ID Number: ${PHYSICIAN_INFO.physicianID}`, {
        lineBreak: true, 
        lineGap: 1
      })
      .moveDown(1.25)

    // Patient Information
    .fontSize(10)
    .fillColor(PALETTE.cadetGray)
    .text(`Patient Name: ${PATIENT_INFO.firstName} ${PATIENT_INFO.lastName}`, {
      lineBreak: true, 
      lineGap: 1
    })
    .fontSize(10)
    .fillColor(PALETTE.cadetGray)
    .text(`Age: ${age} / ${PATIENT_INFO.sex}`, {
      lineBreak: true, 
      lineGap: 1
    })
      .text(`Date: ${today}`)

    // Medications for Patient
    doc.fontSize(12)
      .text(medications.toUpperCase(), 20, 140)

      filename = encodeURIComponent(filename) + '.pdf'
      const content = req.body.content
      doc.y = 300
      doc.text(content, 50, 50)
      doc.end();

    const paramsForBucketUpload = {
      patientID: PATIENT_ID,
      file: doc,
      recordType: 'PRESCRIPTION',
      _contentType: 'application/pdf',
      fileExtension: 'pdf'
    }

    FileHandler.uploadToBucket(paramsForBucketUpload)
      .catch(() => {
        res.status(500).json({
          message: `Unknown error occurred`
        })
      })

    doc.pipe(res)
  }
}