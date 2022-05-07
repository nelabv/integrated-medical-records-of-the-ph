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

class User {
  login(form) {
    return http.post("/users/login", form)
  }
  
  fetchUserInformation() {
    return http.get("/users/profile");
  }
  
  logout() {
    return http.post("/logout")
  }

  fetchFileList(patientID) {
    return http.get(`/user/files/${patientID}`);
  }

  downloadFile(filename) {
    return http.get(`/download/${filename}`);
  }

  register(userInformation) {
    return http.post("/users/register", userInformation)
  }
}

export default new User();