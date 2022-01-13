import { User, Institution, Physician } from "../../models/index.js";

export default class AdminAPI {
  static async approveRegistration(req, res) {
    const { type, id } = req.query;

    function moveToCollection(collectionName, document) {
      // const toMove = await Physician.findOne({ username });
    }
    /*
      inst = institution,
      pt = patient,
      md = physician
    */

    if (type === 'inst') {
      moveToCollection(Institution, id)
    }
    if (type === 'pt') {
      moveToCollection(User, id)
    }
    if (type === 'md') {
      moveToCollection(Physician, id)
    }
  }
}