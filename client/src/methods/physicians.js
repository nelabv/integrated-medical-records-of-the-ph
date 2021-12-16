import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
  credentials: 'same-origin'
});

const httpTESTING = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "multipart/form-data",
  },
  withCredentials: true,
  credentials: 'same-origin'
});

class Physician {
  login(form) {
    return http.post("/physicians/login", form, { withCredentials: true })
  }

  register(physicianInformation) {
    return http.post("/physicians/register", physicianInformation)
  }

  generatePrescription(config) {
    return http.post("/physicians/generate-prescription", config)
  }

  // new route for uploading files: WORK IN PROGRESS
  uploadFileToPatientDatabase(formData, params) {
    return httpTESTING.post(`/upload-to-bucket?id=${params.patientID}&type=${params.fileExtension}`, formData)
  }

  fetchPatientData(patientID) {
    return http.get(`/physicians/fetch-patient?patientID=${patientID}`)
  }
}

export default new Physician();