import axios from "axios";
import { BASE_URL, END_POINTS } from "./constants";

const instance = axios.create({
  baseURL: BASE_URL,
});

// axios.defaults.baseURL = BASE_URL

export const getUsers = async () => {
  try {
    const res = await instance.get(END_POINTS.getUsers);
    return res.data;
  } catch (e) {
    console.log(e);
    return "Error has occured";
  }
};
