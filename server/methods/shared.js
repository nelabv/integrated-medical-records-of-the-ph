import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../models/index.js";

export default class SharedAPI {
  static async logout(req, res) {
    req.session.destroy((err) => {
      if (err) throw err;

      res.status(200).json({
        status: "Success",
        message: "Successfully logged out."
      })
    })
  }
}