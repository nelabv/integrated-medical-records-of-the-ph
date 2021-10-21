import { User } from "../models/index.js";

export const checkIfAuthenticated = (req, res, next) => {
  if (req.session.AUTH) {
    next();
  } else {
    res.status(403).json({
      message: "Login to continue."
    })
  }
}

export const checkIfAuthorized = (req, res, next) => {
  if (req.session.PHYSICIAN_USERNAME) {
    next();
  } else {
    res.status(403).json({
      message: "Login to continue."
    })
  }
}

export const verifyPatientData = async (req, res, next) => {
  const { patientID } = req.query;

  const checkLastName = await User.findOne({ patientID });
  
  if ([checkLastName].length === 1) {
    next()
  } else {
    res.status(400).json({
      message: "Patient not found."
    })
  }
}
