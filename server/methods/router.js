import express from "express";
import UsersAPI from "./users.js";
import SharedAPI from "./shared.js";
import PhysiciansAPI from "./physicians.js";
import InstitutionsAPI from "./institutions.js";
import AdminAPI from "./admin/admin.js";
import FileHandler from "./fileHandler.js";
import { checkIfAuthenticated, checkIfAuthorized, userAccessOnly } from "../middlewares/index.js";

const router = express.Router(); 

router.route('/')  
  .get((req, res) => {
    res.json({
      message: "Welcome to the API of MediRecords 2021. This server code is made for demo purposes only.",
      author: "nbv2021"
    })
  });

// USER-RELATED ACTIONS

router.route("/users/register")
  .post(UsersAPI.register);

router.route("/users/login")
  .post(UsersAPI.login);

router.route("/dashboard")
  .get(checkIfAuthenticated, UsersAPI.fetchUserInfo)

// PHYSICIAN-RELATED ACTIONS

router.route("/physicians/register")
  .post(PhysiciansAPI.register);

router.route("/physicians/login")
  .post(PhysiciansAPI.login);

router.route("/physicians/dashboard")
  .get(checkIfAuthenticated, PhysiciansAPI.fetchPhysicianInfo);

router.route("/physicians/generate-prescription") // ADMIN ONLY
  .post(checkIfAuthenticated, checkIfAuthorized, PhysiciansAPI.generatePrescription);

router.route("/physicians/fetch-patient")
  .get(checkIfAuthenticated, checkIfAuthorized, PhysiciansAPI.fetchPatientInfoByID);

// SHARED ACTIONS

router.route("/logout")
  .post(checkIfAuthenticated, SharedAPI.logout)

// FILE HANDLING
router.route('/upload-to-bucket')
  .post(checkIfAuthenticated, checkIfAuthorized, PhysiciansAPI.imageUpload);

router.route("/fetch-files")
  .get(userAccessOnly, FileHandler.fetchUserFiles)

router.route("/download-file")
  .post(FileHandler.downloadFile)


// DEVELOPMENT
router.route("/verify")
  .get(checkIfAuthenticated, PhysiciansAPI.verifyPatientID)


// ADMIN ACCESS ONLY
router.route('/approval')
  .post(InstitutionsAPI.register)

router.route('/approve?:type?:id?:status')
  .post(AdminAPI.approveOrDeclineRegistration)
    
export default router;