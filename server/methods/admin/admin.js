import { User, 
  Institution, 
  Physician, 
  UsersForApproval,
  PhysiciansForApproval
} from "../../models/index.js";
import { v4 as uuidv4 } from 'uuid';

export default class AdminAPI {
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
        patientID: uuidv4()
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
        physicianID: uuidv4()
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
