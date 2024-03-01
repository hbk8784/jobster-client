import axios from "axios";

const userURL = axios.create({
  baseURL: "https://jobster-server-79ry.onrender.com/api/v1",
});

export default userURL;
