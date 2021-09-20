import express from "express";
import UsersAPI from "./users.js";

const router = express.Router(); 

const checkAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.status(403).json({
      message: "Login to continue."
    })
  }
}

router.route('/')  
  .get((req, res) => {
    res.json({
      message: "Welcome to the API of MediRecords 2021. This server code is made for demo purposes only.",
      author: "nbv2021"
    })
  });

router.route("/users/register")
  .post(UsersAPI.register);

router.route("/users/login")
  .post(UsersAPI.login);

router.route("/dashboard")
  .get(checkAuth, (req, res) => {
    res.json({
      message: "Dashboard sample. Route should be protected."
    })
  })

export default router;