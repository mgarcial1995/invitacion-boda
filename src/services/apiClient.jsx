import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:3000/api",
  baseURL: "https://boda-servicio.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
