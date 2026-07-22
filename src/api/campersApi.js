import axios from "axios";

export const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const getCampers = async () => {
  const { data } = await instance.get("/campers");
  return data;
};

export const getCamperById = async (id) => {
  const { data } = await instance.get(`/campers/${id}`);
  return data;
};
