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
  withCredentials: true
});

class Admin {
  login(form) {
    return http.post('/admin/login', form, { withCredentials: true })
  }

  fetchForApprovalData() {
    return http.get('/approval/waitlist', { withCredentials: true })
  }
}

export default new Admin();