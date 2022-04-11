import PDFDocument from "pdfkit";
import { User } from "../../models/index.js"
import FileHandler from "../fileHandler.js";
import SharedAPI from "../shared.js";

export default class FileGenerators {
  static async medicalPrescription(req, res, PATIENT_ID, PHYSICIAN_INFO) {
    const PATIENT_INFO = await User.findOne({ patientId: PATIENT_ID });
    const { medications } = req.body;

    const today = new Date().toLocaleDateString('en-GB', {
      day : 'numeric',
      month : 'short',
      year : 'numeric'
    }).split(' ').join('-');

    const PALETTE = {
      teal: '#00b3b3',
      textColor: '#666666'
    }

    const doc = new PDFDocument({size: 'A5'})
    let filename = req.body.filename;

    const age = await SharedAPI.computeYearsBetweenTwoDates(PATIENT_INFO.birthdate, 2021);

    // INTEGRATED MEDICAL RECORDS OF THE PH ----------------
    doc.fillColor(PALETTE.teal)
      .fontSize(14)
      .font('Helvetica-Bold')
      .text(`Integrated Medical Records of the Philippines` , 20, 20, {
        lineBreak: true, 
        lineGap: 1
      })
      .moveDown(0.25)
    
    doc.fillColor(PALETTE.textColor)
      .fontSize(8)
      .font('Helvetica')
      .text("For testing purposes only.")

      .moveDown(1.5)


  // PATIENT INFORMATION ----------------

      .fontSize(8)
      .text(`PATIENT NAME: ${PATIENT_INFO.firstName} ${PATIENT_INFO.lastName}`)
      .moveDown(0.25)
      .text(`PATIENT ID: ${PATIENT_INFO.patientID}`)
      .moveDown(0.25)
      .text(`DOB: ${PATIENT_INFO.birthdate.toLocaleDateString()}`)
      .moveDown(0.25)

      .text(`AGE: ${age} / ${PATIENT_INFO.sex}`)

      .moveDown(0.25)

      .text(`DATE ISSUED: ${today}`)

      .moveDown(1)

    
      // PHYSICIAN'S INFORMATION ----------------

      .text(`ATTENDING PHYSICIAN: DR ${PHYSICIAN_INFO.firstName} ${PHYSICIAN_INFO.lastName}`)
      .moveDown(0.25)
      .text(`SPECIALIZATION: ${PHYSICIAN_INFO.specialization}`)

    // MEDICATIONS FOR PATIENT ------------------
    
    .moveDown(5)

    doc.fontSize(10)
      .text(medications.toUpperCase())


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