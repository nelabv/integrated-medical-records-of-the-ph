import axios from "axios";

const URL = 'https://irmp-api.herokuapp.com/';

const http = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Credentials": true
  },
  credentials: 'same-origin'
});

const httpTESTING = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Credentials": true
  },
  credentials: 'same-origin'
});

class Physician {
  login(form) {
    return http.post("/physicians/login", form)
  }

  register(physicianInformation) {
    return http.post("/physicians/register", physicianInformation)
  }

  fetchPhysicianInformation() {
    return http.get("/physicians/profile");
  }

  generatePrescription(config) {
    return http.post("/physicians/generate-prescription", config)
  }

  uploadFileToPatientDatabase(formData, params) {
    return httpTESTING.post(`/upload-to-bucket?id=${params.patientID}&type=${params.fileExtension}`, formData)
  }

  verifyPatientInformation(query) {
    return http.get(`/verify?id=${query.patientID}&last=${query.patientLastName}`)
  }
}

export default new Physician();