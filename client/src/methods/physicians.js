import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
  credentials: 'same-origin'
});

class Physician {
  login(form) {
    return http.post("/physicians/login", form, { withCredentials: true })
  }

  generatePrescription(config) {
    return http.post("/physicians/generate-prescription", config)
  }

  fetchPatientData(patientID) {
    return http.get(`/physicians/fetch-patient?patientID=${patientID}`)
  }
}

export default new Physician();