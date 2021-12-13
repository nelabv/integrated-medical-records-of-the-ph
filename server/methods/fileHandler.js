import { User } from "../models/index.js"
import AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from "buffer";

const s3 = new AWS.S3();

export default class FileHandler {
  static async uploadToBucket(params) {
/*     let base64str;


    function getImgBuffer(base64) {
      const base64str = base64.replace(/^data:image\/\w+;base64,/, '')
      return Buffer.from(base64str, 'base64');  
    } */

    console.log(params.recordType)
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
    const userData = await User.findOne({ username: req.session.USERNAME });

    const params = {
      Bucket: process.env.BUCKET_NAME,
      Delimiter: '/',
      Prefix: `${userData.patientID}/`
    };
      
    s3.listObjects(params, function(err, data) {
      if (err) {
        res.status(500).json({
          error: err.message
        })
      } else {
        res.status(200).json({
          data: data.Contents
        })
      }
    })
  }

  static async downloadFile(req, res, next) {
    s3.getSignedUrl('getObject', {
      Bucket: process.env.BUCKET_NAME,
      Key: req.body.fileName
    }, (error, url) => {
      if (error) {
        res.status(403).json({
          error
        })
      } else {
        res.status(200).json({
          url
        })
      }
    })
  }
}