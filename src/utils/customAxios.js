import axios from "axios";

const userURL = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1",
});

export default userURL;