import { User, 
  Institution, 
  Physician, 
  ForApproval 
} from "../../models/index.js";
import { v4 as uuidv4 } from 'uuid';
import { response } from "express";

export default class AdminAPI {
  static async approveOrDeclineRegistration(req, res) {
    async function addToCollection(_pendingDocument, collectionType) {
      if (collectionType === 'inst') {
        const toSave = {
          ..._pendingDocument,
          institutionID: uuidv4()
        }
        const newInstitution = new Institution(toSave);
  
        newInstitution.save();

        res.status(200).json({
          message: `Successfully approved registration of ${toSave.registeredName.toUpperCase()}`
        })
      }
      else if (collectionType === 'pt') {
        const toSave = {
          ..._pendingDocument,
          patientID: uuidv4()
        }
        const newUser = new User(toSave);
  
        newUser.save();

        res.status(200).json({
          message: `Successfully approved registration of ${toSave.lastName.toUpperCase()}, ${toSave.firstName.toUpperCase()}`
        })
      }
      else if (collectionType === 'md') {
        const toSave = {
          ..._pendingDocument,
          physicianID: uuidv4()
        }
        const newPhysician = new Physician(toSave);
  
        newPhysician.save();

        res.status(200).json({
          message: `Successfully approved registration of ${toSave.lastName.toUpperCase()}, ${toSave.firstName.toUpperCase()}`
        })
      } 
      else {
        res.status(400).json({
          message: "Unknown collection type query. Check if collection type query is valid."
        })
      }
    }
    /*
      inst = institution,
      pt = patient,
      md = physician
      ------
      type = type of document type
      id = mongoDB query
    */
    const { type, id, status } = req.query;

    // Search for the document in the ForApproval collection.
    let pendingDocument;

    try {
      const fetchData = await ForApproval.findById(id).lean();
      const { _id, __v, ...rest } = fetchData;
      pendingDocument = {...rest}
    } catch {
      res.status(404).json({
        message: "No entry found. Check if document ID is valid."
      })
    }

    // Delete document in the before configuring confirmation status.

    await ForApproval.findByIdAndRemove(id);
    // Do action based on confirmation status.

    if (status === 'true') {
      addToCollection(pendingDocument, type)
    } else if (status === 'false') {
      // Unapproved
      res.status(200).json({
        message: "Application declined successfully."
      })
    } else {
      res.status(400).json({
        message: "Document exists in the collection. Wrong input from user."
      })
    }
  }
}
