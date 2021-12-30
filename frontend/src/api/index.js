import axios from "axios";
const apiUrl = process.env.GATSBY_API_URL;
axios.create({
  baseURL: apiUrl,
});

export function sendEmail(data) {
  return axios.post(apiUrl, data);
}
