import { User, 
  Physician, 
  UsersForApproval,
  PhysiciansForApproval
} from "../models/index.js";
import { v4 as uuidv4 } from 'uuid';

export default class AdminAPI {
  static async login(req, res) {
    const { username, password } = req.body;

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      req.session.AUTH = true;
      req.session.USERNAME = username;
      req.session.ADMIN = true;

      res.status(200).json({
        status: "Admin access granted."
      })
    } else {
      res.status(404).json({
        error: "Forbidden. Invalid admin access."
      })
    }
  }

  static async fetchForApprovalData(req, res) {
    try {
      const usersForApproval = await UsersForApproval.find({});

      const physiciansForApproval = await PhysiciansForApproval.find({});
  
      res.status(200).json({
        usersForApproval,
        physiciansForApproval
      })
    } catch (error) {
      res.status(404).json({
        error: "Unknown error occurred",
        message: `${error}`
      })
    }
  }

  static async approveOrDeclineUser(req, res) {
    const { id, status } = req.query;

    let pendingDocument;

    try {
      const fetchData = await UsersForApproval.findById(id).lean();
      const { _id, __v, ...rest } = fetchData;
      pendingDocument = {...rest}
    } catch {
      res.status(404).json({
        message: "No entry found. Check if document ID is valid."
      })
    }

    if (status === "true") {
      const toSave = {
        ...pendingDocument,
        patientID: Date.now()
      }
      const newUser = new User(toSave);

      newUser.save();
      await UsersForApproval.findByIdAndRemove(id);

      res.status(200).json({
        message: `Successfully approved registration of ${toSave.lastName.toUpperCase()}, ${toSave.firstName.toUpperCase()}`
      })
    }

    else if (status === "false") {
      await UsersForApproval.findByIdAndRemove(id);

      res.status(200).json({
        message: "Application declined successfully."
      })
    }
  }

  static async approveOrDeclinePhysician(req, res) {
    const { id, status } = req.query;

    let pendingDocument;

    try {
      const fetchData = await PhysiciansForApproval.findById(id).lean();
      const { _id, __v, ...rest } = fetchData;
      pendingDocument = {...rest}
    } catch {
      res.status(404).json({
        message: "No entry found. Check if document ID is valid."
      })
    }

    if (status === "true") {
      const toSave = {
        ...pendingDocument,
        physicianID: Date.now()
      }
      const newPhysician = new Physician(toSave);

      newPhysician.save();
      await PhysiciansForApproval.findByIdAndRemove(id);

      res.status(200).json({
        message: `Successfully approved registration of ${toSave.lastName.toUpperCase()}, ${toSave.firstName.toUpperCase()}`
      })
    }

    else if (status === "false") {
      await PhysiciansForApproval.findByIdAndRemove(id);

      res.status(200).json({
        message: "Application declined successfully."
      })
    }
  }
}
