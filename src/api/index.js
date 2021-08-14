import axios from "axios";
const apiUrl = "http://localhost:9000/.netlify/functions/server/contact/send";

axios.create({
  baseURL: apiUrl,
});

export function sendEmail(data) {
  return axios.post(apiUrl, data);
}
