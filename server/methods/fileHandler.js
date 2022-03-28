import { User } from "../models/index.js"
import AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid';

const s3 = new AWS.S3();

export default class FileHandler {
  static async uploadToBucket(params) {
    /* 
        Params for uploading to S3 Bucket:
        * patientID: This serves as the directory to a patient's files.
        * file: The document to be uploaded
        * recordType: Type of document (could be prescription, image, etc.)
        * _contentType: For uploading purposes only
        * fileExtension
     */

    const dateToday = new Date().toLocaleDateString('en-GB', {
      day : 'numeric',
      month : 'short',
      year : 'numeric'
    }).split(' ').join('-');

    const fileName = `${params.recordType}_${uuidv4()}_${dateToday}.${params.fileExtension}`;

    const config = {
      Key : `${params.patientID}/${fileName}`, // filename
      Body : params.file,
      Bucket : process.env.BUCKET_NAME,
      contentType : params._contentType
    }

    s3.upload(config, (error) => {
      if (error) {
        console.log(`Error in file handler: ${error}`)
      }
      else return
    });
  }

  static async fetchUserFiles(req, res, next) {
    // Future patient ID will include numbers and letters.

    const idConvertedToNumber = Number(req.params.id);

    const userData = await User.findOne({ patientId: idConvertedToNumber});

    const params = {
      Bucket: process.env.BUCKET_NAME,
      Delimiter: '/',
      Prefix: `${idConvertedToNumber}/`
    };
      
    s3.listObjects(params, function(err, data) {
      if (err) {
        res.status(500).json({
          error: err.message
        })
      } else {
        res.status(200).json(data.Contents)
      }
    })
  }

  static async downloadFile(req, res, next) {
    try {
      // Get patientID
      const { filename } = req.params;
      const decodedFilename = decodeURIComponent(filename);

      const fileURL = `https://${process.env.BUCKET_NAME}.${process.env.REGION_STRING}.amazonaws.com/${decodedFilename}`

      res.status(200).json({
        fileURL
      })

    } catch(err) {
      res.status(400).json({
        message: "An error occurred. Please see client parameters if file name is valid.",
        err
      })
    }
  }
}