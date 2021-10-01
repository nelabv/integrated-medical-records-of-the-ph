import express from "express";
import UsersAPI from "./users.js";
import SharedAPI from "./shared.js";
import { checkIfAuthenticated } from "../middlewares/index.js";

const router = express.Router(); 

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
  .get(checkIfAuthenticated, UsersAPI.fetchUserInfo)

router.route("/logout")
  .post(checkIfAuthenticated, SharedAPI.logout)

export default router;