import axios from "axios";

export default axios.create({
  // live url
  baseURL: "https://getupandhikeapi-production.up.railway.app/posts",

  // for development
  // baseURL: "/posts",
});
