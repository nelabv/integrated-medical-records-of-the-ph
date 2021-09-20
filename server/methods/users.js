import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../models/index.js";

export default class UsersAPI {
  static async register(req, res) {
    const { username, password, firstName, lastName, birthdate, bloodType } = req.body;
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
            const user = {
              patientID: uuidv4(),
              username,
              password: hash,
              firstName,
              lastName,
              birthdate,
              bloodType
            }
  
            const newUser = new User(user);
  
            newUser.save()
              .then((response, error) => {
                if (error) {
                  console.log(`User registration error`);
                  res.status(404).json({
                    status: "An error occurred",
                    error
                  })
                } else {
                  console.log(`User registration successful`);
                  res.status(200).json({
                    status: "User registered successfully!",
                    response
                  })
                }
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
        req.session.isAuth = true;

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
}