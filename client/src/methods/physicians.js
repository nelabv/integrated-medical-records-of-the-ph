import axios from "axios";

const URL = 'https://irmp-api.niellebv.app';

const http = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  },
  withCredentials: true
});

const httpTESTING = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
});

class Physician {
  login(form) {
    return http.post("/physicians/login", form, {withCredentials: true})
  }

  register(physicianInformation) {
    return http.post("/physicians/register", physicianInformation, { withCredentials: false })
  }

  fetchPhysicianInformation() {
    return http.get("/physicians/profile", {withCredentials: true});
  }

  generatePrescription(config) {
    return http.post("/physicians/generate-prescription", config, {withCredentials: true})
  }

  uploadFileToPatientDatabase(formData, params) {
    return httpTESTING.post(`/upload-to-bucket?id=${params.patientID}&type=${params.fileExtension}`, formData, {withCredentials: true})
  }

  verifyPatientInformation(query) {
    return http.get(`/verify?id=${query.patientID}&last=${query.patientLastName}`, {withCredentials: true})
  }
}

export default new Physician();