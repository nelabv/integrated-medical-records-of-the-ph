export const checkIfAuthenticated = (req, res, next) => {
  if (req.session.AUTH) {
    next();
  } else {
    res.status(403).json({
      message: "Login to continue."
    })
  }
}
