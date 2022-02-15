import axios from "axios";

const apiUrl = process.env.GATSBY_API_URL;

const request = axios.create({
  baseURL: apiUrl,
});

export function sendEmail(data) {
  return request.post("/contact/send", data);
}

export function validateCAPTCHA(token) {
  return request.post("/contact/validate", { token });
}
