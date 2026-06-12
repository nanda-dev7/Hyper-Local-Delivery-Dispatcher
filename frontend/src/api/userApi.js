import api from "./axios";

export const getPartners = async () => {
  const response = await api.get("/users/partners");
  return response.data;
};