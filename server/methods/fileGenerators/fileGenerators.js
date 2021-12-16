import PDFDocument from "pdfkit";
import { User } from "../../models/index.js"
import FileHandler from "../fileHandler.js";

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
      .text(`Phone: ${PHYSICIAN_INFO.phoneNumber}`, {
        lineBreak: true, 
        lineGap: 1
      })
      .moveDown(0.25)
      .text(`E-mail: ${PHYSICIAN_INFO.email}`, {
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
    .text(`Patient Name: ${PATIENT_INFO.firstName} ${PATIENT_INFO.lastName}`, {
      lineBreak: true, 
      lineGap: 1
    })
    .fontSize(10)
    .fillColor(PALETTE.cadetGray)
    .text(`Age: ${patientAge} / ${PHYSICIAN_INFO.sex}`, {
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

    const paramsForBucketUpload = {
      patientID: PATIENT_ID,
      file: doc,
      recordType: 'PRESCRIPTION',
      _contentType: 'application/pdf',
      fileExtension: 'pdf'
    }
    /* 
        Params for uploading to S3 Bucket:
        * patientID: This serves as the directory to a patient's files.
        * file: The document to be uploaded
        * recordType: Type of document (could be prescription, image, etc.)
        * _contentType: For uploading purposes only
     */

    FileHandler.uploadToBucket(paramsForBucketUpload)
      .catch(() => {
        res.status(500).json({
          message: `Unknown error occurred`
        })
      })

    doc.pipe(res)
  }
}