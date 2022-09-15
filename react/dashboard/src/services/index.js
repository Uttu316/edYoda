import axios from "axios";
import { BASE_URL, END_POINTS } from "./constants";

const AXIOS = axios.create({
  baseURL: BASE_URL,
});

//axios.defaults.baseURL = BASE_URL

export const getUsers = async () => {
  try {
    const res = await AXIOS.get(END_POINTS.getUsers);
    return res.data;
  } catch (e) {
    console.log(e);
    return "Error has occured";
  }
};

export const fetchUserDetails = (userId) => {
  return new Promise((resolve, reject) => {
    if (!userId) {
      reject("User id is not valid");
      return;
    }
    const url = `${END_POINTS.getUsers}/${userId}`;
    AXIOS.get(url)
      .then((res) => {
        resolve(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
