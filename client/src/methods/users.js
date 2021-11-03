import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
  credentials: 'same-origin'
});

class User {
  login(form) {
    return http.post("/users/login", form, { withCredentials: true })
  }
  
  fetchUserInformation() {
    return http.get("/dashboard")
  }
  
  logout() {
    return http.post("/logout")
  }

  fetchFileList(patientID) {
    return http.post(`/fetch-files`)
  }
}

export default new User();