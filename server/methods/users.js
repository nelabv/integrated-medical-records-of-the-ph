import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import { User, ForApproval } from "../models/index.js";
import dotenv from "dotenv";
dotenv.config();

export default class UsersAPI {
  static async register(req, res) {
    const { username, password, firstName, lastName, sex, birthdate, bloodType } = req.body;
    const checkIfUsernameIsTaken = await User.findOne({ username });

    if (checkIfUsernameIsTaken) {
      res.status(409).json({
        status: "Username taken",
        message: "Registration cancelled. Username is already taken."
      })
    } else {
      try {
        bcryptjs.hash(password, 10, async function(error, hash) {
          if (error) {
            console.error(`Error in hashing password: ${e}`);
          } else {
            User.countDocuments({}, function(err, count){
              if (err) {
                res.status(404).json({
                  status: "An error occurred in countDocuments",
                  error
                })
              }

              const user = {
                patientID: uuidv4(),
                username,
                password: hash,
                firstName,
                lastName,
                sex,
                birthdate,
                bloodType
              }

              const newUser = new ForApproval(user);
  
              newUser.save()
                .then((response, error) => {
                  if (error) {
                    res.status(404).json({
                      status: "Error in registering user.",
                      error
                    })
                  } else {
                    res.status(200).json({
                      status: "User waitlisted successfully! Please wait for approval.",
                      response
                    })
                  }
                }) 

            })
          }
        })
      } catch (err) {
        console.error(`UsersAPI (register): ${err}`);

        res.status(404).json({
          status: "UsersAPI (register): An error occurred",
          error
        })
      }
    }
  }

  static async login(req, res) {
    const { username, password } = req.body;

    let userData = await User.findOne({ username });
    
    if (userData) {
      const comparePasswords = await bcryptjs.compare(password, userData.password);
      
      if (comparePasswords) {
        req.session.AUTH = true;
        req.session.USERNAME = username;

        res.status(200).json({
          status: "success",
          message: "Successful login"
        })
      } else {
        res.status(401).json({
          error: "Wrong password",
          message: "Incorrect input from user. Access denied."
        })
      }
    } else {
      res.status(404).json({
        error: "User not found"
      })
    }
  }

  static async fetchUserInfo(req, res) {
    try {
      const userData = await User.findOne({ username: req.session.USERNAME });

      const { patientID, username, firstName, lastName, birthdate, bloodType } = userData;
  
      res.status(200).json({
        patientID, username, firstName, lastName, birthdate, bloodType
      })
    } catch (error) {
      res.status(404).json({
        error: "Unknown error occurred",
        message: `${error}`
      })
    }
  }
}