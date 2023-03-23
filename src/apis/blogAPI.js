import axios from "axios";

export default axios.create({
  // live url
  baseURL: "https://getupandhikeapi-production.up.railway.app/posts",
  // for development
  // baseURL: "http://localhost:3001/posts",
});

// "https://getupandhikeapi-production.up.railway.app/posts"
