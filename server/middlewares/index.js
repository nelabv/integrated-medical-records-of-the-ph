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

export const userAccessOnly = (req, res, next) => {
  if (req.session.USERNAME) {
    next();
  } else {
    res.status(403).json({
      message: "Unauthorized. For user's access only."
    })
  }
}
