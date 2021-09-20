import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import { Institution } from "../models/index.js";

export default class InstitutionsAPI {
  static async register(req, res) {
    const { username, password, name } = req.body;

    try {
      bcryptjs.hash(password, 10, async function(error, hash) {
        if (error) {
          console.error(`Error in hashing password: ${e}`);
        } else {
          const institution = {
            institutionID: uuidv4(),
            username,
            password: hash,
            name
          }

          const newInstitution = new Institution(institution);

          newInstitution.save()
            .then((response, error) => {
              if (error) {
                console.log(`Institution registration error`);
                res.status(404).json({
                  status: "An error occurred",
                  error
                })
              } else {
                console.log(`Institution registration successful`);
                res.status(200).json({
                  status: "Institution registered successfully!",
                  response
                })
              }
            }) 
        }
      })
    } catch (err) {
      console.error(`InstitutionsAPI (register): ${err}`);

      res.status(404).json({
        status: "InstitutionsAPI (register): An error occurred",
        error
      })
    }
  }
}