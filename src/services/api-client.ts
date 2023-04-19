import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6db04454ab46431ba1e1d69e61632fa7",
  },
});
