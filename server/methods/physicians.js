import bcryptjs from "bcryptjs";
import { v1 as uuidv1 } from 'uuid';
import { Physician } from "../models/index.js";
import dotenv from "dotenv";
dotenv.config();

export default class PhysiciansAPI {
  static async register(req, res) {
    const { licenseNumber, username, password, firstName, lastName, country } = req.body;
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
            const physician = {
              physicianID: uuidv1(), // uuidv4() for patients
              licenseNumber,
              username,
              password: hash,
              firstName,
              lastName,
              country
            }
  
            const newUser = new Physician(physician);
  
            newUser.save()
              .then((response, error) => {
                if (error) {
                  console.log(`Physician registration error`);
                  res.status(404).json({
                    status: "An error occurred",
                    error
                  })
                } else {
                  console.log(`Physician registration successful`);
                  res.status(200).json({
                    status: "Physician registered successfully!",
                    response
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

        res.status(200).json({
          status: "success",
          message: "Successful login"
        })
      } else {
        res.status(401).json({
          error: "Wrong password",
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

      const { physicianID, username, firstName, lastName, country } = physicianInfo;
  
      res.status(200).json({
        physicianID, username, firstName, lastName, country
      })
    } catch (error) {
      res.status(404).json({
        error: "Unknown error occurred",
        message: `${error}`
      })
    }
  }
}