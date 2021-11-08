import { User } from "../models/index.js"
import AWS from 'aws-sdk'

const s3 = new AWS.S3();

export default class FileHandler {
  static async uploadToBucket(patientID, fileName, document) {
    const params = {
      Key : `${patientID}/${fileName}`,
      Body : document,
      Bucket : process.env.BUCKET_NAME,
      contentType : 'application/pdf'
    }

    s3.upload(params, (error) => {
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