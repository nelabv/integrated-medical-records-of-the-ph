import multer from 'multer'
import AWS from 'aws-sdk'
import { response } from 'express';

const upload = multer({ dest: 'uploads/' })
const s3 = new AWS.S3();

export default class FileHandler {
  static async uploadToBucket(fileLocation, fileName, document) {
    const params = {
      Key : `${fileLocation}/${fileName}`,
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
}