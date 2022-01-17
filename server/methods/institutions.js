import bcryptjs from "bcryptjs";
import { ForApproval } from "../models/index.js";

export default class InstitutionsAPI {
  static async register(req, res) {
    const { username, password, registeredName, email, location, profile, website } = req.body;

    try {
      bcryptjs.hash(password, 10, async function(error, hash) {
        if (error) {
          console.error(`Error in hashing password: ${e}`);
        } else {
          const institution = {
            username,
            password: hash,
            registeredName,
            email,
            location,
            profile,
            website
          }

          const newInstitution = new ForApproval(institution);

          newInstitution.save()
            .then((response, error) => {
              if (error) {
                console.log(`Institution registration error`);
                res.status(404).json({
                  status: "An error occurred",
                  error
                })
              } else {
                console.log(`Institution waitlisted successfully. Please wait for approval.`);
                res.status(200).json({
                  status: "Institution waitlisted."
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