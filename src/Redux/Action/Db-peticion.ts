import axios from "axios";

export const dbJoma = axios.create({
  baseURL: "http://localhost:3001",
});
