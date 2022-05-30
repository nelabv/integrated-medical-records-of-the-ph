import bcryptjs from "bcryptjs";
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import { PhysiciansForApproval, Physician } from "../models/index.js";
import { User } from "../models/index.js";
import FileGenerators from "./fileGenerators/fileGenerators.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID
});

const s3 = new aws.S3();

export default class PhysiciansAPI {
  static async register(req, res) {
    const { licenseNumber, specialization, username, password, firstName, lastName, address, birthdate, sex } = req.body;
    const checkIfUsernameIsTaken = await Physician.findOne({ username });

    if (checkIfUsernameIsTaken) {
      res.status(409).json({
        status: "Physician registration: Username taken",
        message: "Registration cancelled. Username is already taken."
      })
    } else {
      try {
        bcryptjs.hash(password, 10, async function(error, hash) {
          if (error) {
            console.error(`Error in hashing password: ${e}`);
          } else {
            Physician.countDocuments({}, function(err, count){
              if (err) {
                res.status(404).json({
                  status: "An error occurred in countDocuments",
                  error
                })
              }
              else {
                const physician = {
                  physicianID: uuidv4(),
                  licenseNumber,
                  specialization,
                  username,
                  password: hash,
                  firstName,
                  lastName,
                  address,
                  birthdate,
                  sex
                }

                const newPhysician = new PhysiciansForApproval(physician);
  
                newPhysician.save()
                  .then((response, error) => {
                    if (error) {
                      res.status(404).json({
                        status: "Error in registering physician",
                        error
                      })
                    } else {
                      res.status(200).json({
                        status: "Physician waitlisted successfully! Please wait for approval.",
                        response
                      })
                    }
                  })
              }
            }) 
          }
        })
      } catch (err) {
        console.error(`PhysiciansAPI (register): ${err}`);

        res.status(404).json({
          status: "PhysiciansAPI (register): An error occurred",
          error
        })
      }
    }
  }

  static async login(req, res) {
    const { username, password } = req.body;

    let physicianData = await Physician.findOne({ username });
    
    if (physicianData) {
      const comparePasswords = await bcryptjs.compare(password, physicianData.password);
      
      if (comparePasswords) {
        req.session.AUTH = true;
        req.session.PHYSICIAN_USERNAME = username;
        req.session.ID = physicianData.physicianID;

        if (username === process.env.ADMIN_USERNAME) {
          req.session.ENTITY = "ADMIN";

          res.status(200).json({
            id: physicianData.physicianID,
            physicianData
          })
        } else {
          res.status(200).json({
            id: physicianData.physicianID,
            physicianData
          })
        }
      } else {
        res.status(401).json({
          status: "Wrong password",
          message: "Incorrect input from physician. Access denied."
        })
      }
    } else {
      res.status(404).json({
        error: "Physician not found"
      })
    }
  }

  static async fetchPhysicianInfo(req, res) {
    try {
      const physicianInfo = await Physician.findOne({ username: req.session.PHYSICIAN_USERNAME });

      const { physicianID, username, firstName, lastName } = physicianInfo;
  
      res.status(200).json({
        physicianID, username, firstName, lastName
      })
    } catch (error) {
      res.status(404).json({
        error: "Unknown error occurred",
        message: `${error}`
      })
    }
  }

  static async generatePrescription(req, res) {
    const PHYSICIAN_INFO = await Physician.findOne({ username: req.session.PHYSICIAN_USERNAME });
    const PATIENT_ID = req.body.patientID;

    FileGenerators.medicalPrescription(req, res, PATIENT_ID, PHYSICIAN_INFO)
  }

  static async imageUpload(req, res) {
    // CONFIGURE THE TYPE OF FILE TO BE UPLOADED FIRST
    const fileName = `${req.query.id}/${Date.now().toString()}.${req.query.type}`

    const uploadS3 = multer({
      storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        acl: "public-read",
        metadata: function(req, file, cb) {
          cb(null, { fieldName: "TESTING_META_DATA!" });
        },
    
        key: function(req, file, cb) {
          cb(null, fileName);
        }
      })
    });

    const singleUpload = uploadS3.single("file");

    singleUpload(req, res, function(err, some) {
        if (err) {
          console.log(err)
          return res.status(422).send({
            errors: [{ title: "Image Upload Error", detail: err.message }]
          });
        }
        return res.status(200).json({ status: 'uploaded' });
      });
  }

  static async fetchPatientInfoByID(req, res) {
    const { patientID } = req.query;

    let patientData = await User.findOne({ patientID });
    if (!patientData) {
      res.status(400).json({
        status: "Patient not found!"
      })
    } else {
      const { firstName, lastName, birthdate, bloodType } = patientData;
      const patientInfo = {
        firstName, lastName, birthdate, bloodType
      }

      res.status(200).json({
        patientInfo
      })
    }
  }

  static async verifyPatientID(req, res, next) {
    const { id, last } = req.query;
  
    const patientData = await User.findOne({ id });
    
    if ([patientData].length === 1) {
      if (patientData.lastName === last) {
        res.status(200).json({
          message: "Patient verified!",
          patientData
        })
      } else {
        res.status(400).json({
          message: "Invalid patient information!"
        })
      }
    } else {
      res.status(400).json({
        message: "Patient not found."
      })
    }
  }
}

