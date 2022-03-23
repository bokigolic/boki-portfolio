import axios from "axios";
import { responsesAreSame } from "workbox-broadcast-update";

export const ajax = {};

ajax.sendContactEmail = (formData) => {
  const prepared_data = JSON.stringify(formData); // konvertujemo data u json
  const response = axios.post('http://localhost:3001/sendemail/contact', prepared_data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
};