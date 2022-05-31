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

  approveOrDeclineUser(id, status) {
    return http.post(`/approval/users?id=${id}&status=${status}`, { withCredentials: true})
  }

  approveOrDeclinePhysician(id, status) {
    return http.post(`/approval/physician?id=${id}&status=${status}`, { withCredentials: true})
  }
}

export default new Admin();