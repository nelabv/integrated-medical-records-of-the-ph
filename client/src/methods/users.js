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
  credentials: 'same-origin'
});

class User {
  login(form) {
    return http.post("/users/login", form, { withCredentials: true })
  }
  
  fetchUserInformation() {
    return http.get("/users/profile", { withCredentials: true });
  }
  
  logout() {
    return http.post("/logout", { withCredentials: true })
  }

  fetchFileList(patientID) {
    return http.get(`/user/files/${patientID}`, { withCredentials: true });
  }

  downloadFile(filename) {
    return http.get(`/download/${filename}`, { withCredentials: true });
  }

  register(userInformation) {
    return http.post("/users/register", userInformation)
  }
}

export default new User();