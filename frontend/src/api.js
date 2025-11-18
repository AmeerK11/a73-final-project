import axios from "axios";

const API_URL = "/api";

export const login = async (username, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { username, password });
  return res.data.token; 
};

export const getChartData = async (chartName, token) => {
  const res = await axios.get(`${API_URL}/chart/${chartName}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
