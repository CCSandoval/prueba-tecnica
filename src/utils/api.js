import axios from "axios";

export const getUsers = async (success, error, page) => {
  const options = {
    method: "GET",
    url: `https://reqres.in/api/users?page=${page}`,
  };
  await axios.request(options).then(success).catch(error);
};
