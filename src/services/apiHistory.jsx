import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const apiHistory = {
  get: () => axios.get("/readingHistory"),

  create: (data) => axios.post("/readingHistory", data),

  update: (id, data) => axios.put(`/readingHistory/${id}`, data),

  delete: (id) => axios.delete(`/readingHistory/${id}`),
};
