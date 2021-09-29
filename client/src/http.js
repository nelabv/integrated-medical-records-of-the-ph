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

  logout() {
    return http.post("/logout")
  }

  testing(message) {
    return http.post("/testing", message )
  }
}

export default new User();