import axios from "axios";

const url = "https://random-data-api.com/api/users/random_user";

export const getUserInfo = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.log(e);
    return "Error has occured";
  }
};
