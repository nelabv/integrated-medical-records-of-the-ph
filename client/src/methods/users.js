import axios from "axios";

const http = axios.create({
  baseURL: "https://irmp-testing.herokuapp.com/",
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