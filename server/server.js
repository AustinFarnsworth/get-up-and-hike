const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// Get all posts
app.get("/post", (req, res) => {
  res.status(200).json({
    status: "Success",
    author: "John",
    postContent: "Hello this is a post",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
