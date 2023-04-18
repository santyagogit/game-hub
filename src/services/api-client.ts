import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "07eced2c0bc344dabd65aa825ee9c0aa",
  },
});
