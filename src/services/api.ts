import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // ajuste a porta conforme seu backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
