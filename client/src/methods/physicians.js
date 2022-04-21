import axios from "axios";

const http = axios.create({
  baseURL: "https://irmp-testing.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
  credentials: 'same-origin'
});

const httpTESTING = axios.create({
  baseURL: "https://irmp-testing.herokuapp.com/",
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