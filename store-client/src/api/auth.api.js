import axios from "axios";

export const userRequest = async (user) => {
  return await axios.post("http://127.0.0.1:8000/api/auth/token/", user);
};


export const userUpdateRequest = async (refresh) => {
  return await axios.post("http://127.0.0.1:8000/api/auth/token/refresh/", { refresh });
}
