// If entity requesting is logged in (can be USERS, PHYSICIANS, or INSTITUTIONS).
export const checkIfAuthenticated = (req, res, next) => {
  if (req.session.AUTH) {
    next();
  } else {
    res.status(403).json({
      message: "Login to continue."
    })
  }
}

// Request can be made by PHYSICIANS only.
export const physiciansAccessOnly = (req, res, next) => {
  if (req.session.PHYSICIAN_USERNAME) {
    next();
  } else {
    res.status(403).json({
      message: "Login to continue."
    })
  }
}

// Request can be made by USERS only.
export const userAccessOnly = (req, res, next) => {
  if (req.session.USERNAME) {
    next();
  } else {
    res.status(403).json({
      message: "Unauthorized. For user's access only."
    })
  }
}

// Request can be made by either PHYSICIANS or INSTITUTIONS only.
export const usersProhibited = (req, res, next) => {
  if (req.session.USERNAME) {
    res.status(403).json({
      message: "Unauthorized. For PHYSICIANS and INSTITUTIONS' access only."
    })
  } else {
    next()
  }
}

export const adminAccessOnly = (req, res, next) => {
  if (!req.session.ADMIN) {
    res.status(403).json({
      message: "Unauthorized. For PHYSICIANS and INSTITUTIONS' access only."
    })
  } else {
    next()
  }
}