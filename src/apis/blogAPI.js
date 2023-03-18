import axios from "axios";

export default axios.create({
  // live url
  // baseURL: `postgresql://postgres:@containers-us-west-39.railway.app:7097/railway`,
  // for development
  baseURL: "http://localhost:3001/posts",
});

// "https://getupandhikeapi-production.up.railway.app/posts"
