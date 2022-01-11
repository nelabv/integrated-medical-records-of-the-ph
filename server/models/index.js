import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  patientID: {
    type: Number,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  }
})

const InstitutionSchema = new Schema({
  institutionID: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registeredName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
  },
  website: {
    type: String
  }
})

const PhysicianSchema = new Schema({
  physicianID: {
    type: String,
    required: true,
    unique: true
  },
  licenseNumber: {
    type: Number,
    required: true,
    unique: true
  },
  specialization: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})

export const User = mongoose.model('Users', UserSchema);
export const Institution = mongoose.model('Approval', InstitutionSchema);
export const Physician = mongoose.model('Physician', PhysicianSchema);