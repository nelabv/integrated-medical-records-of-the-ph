import express from "express";
import UsersAPI from "./users.js";
import SharedAPI from "./shared.js";
import PhysiciansAPI from "./physicians.js";
import InstitutionsAPI from "./institutions.js";
import AdminAPI from "./admin.js";
import FileHandler from "./fileHandler.js";
import { checkIfAuthenticated, physiciansAccessOnly, userAccessOnly } from "../middlewares/index.js";

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

router.route("/users/profile")
  .get(checkIfAuthenticated, UsersAPI.fetchUserInfo)

// PHYSICIAN-RELATED ACTIONS

router.route("/physicians/register")
  .post(PhysiciansAPI.register);

router.route("/physicians/login")
  .post(PhysiciansAPI.login);

router.route("/physicians/profile")
  .get(physiciansAccessOnly, PhysiciansAPI.fetchPhysicianInfo);

router.route("/physicians/generate-prescription") // ADMIN ONLY
  .post(checkIfAuthenticated, physiciansAccessOnly, PhysiciansAPI.generatePrescription);

router.route("/physicians/fetch-patient")
  .get(checkIfAuthenticated, physiciansAccessOnly, PhysiciansAPI.fetchPatientInfoByID);

// SHARED ACTIONS

router.route("/logout")
  .post(checkIfAuthenticated, SharedAPI.logout)

// FILE HANDLING
router.route('/upload-to-bucket')
  .post(checkIfAuthenticated, physiciansAccessOnly, PhysiciansAPI.imageUpload);

router.route("/user/files/:id")
  .get(checkIfAuthenticated, FileHandler.fetchUserFiles)

router.route("/download/:filename")
  .get(checkIfAuthenticated, FileHandler.downloadFile)


// DEVELOPMENT
router.route("/verify")
  .get(checkIfAuthenticated, PhysiciansAPI.verifyPatientID)


// ADMIN ACCESS ONLY
router.route('/admin/login')
  .post(AdminAPI.login);

router.route('/approval')
  .post(InstitutionsAPI.register)

router.route('/approval/users?:id?:status')
  .post(AdminAPI.approveOrDeclineUser)

router.route('/approval/physician?:id?:status')
  .post(AdminAPI.approveOrDeclinePhysician)
    
export default router;