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

  fetchFileList() {
    return http.get(`/fetch-files`)
  }

  downloadFile(fileName) {
    return http.post("/download-file", {fileName})
  }
}

export default new User();