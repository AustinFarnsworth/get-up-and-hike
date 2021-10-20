const express = require("express");
const db = require("./db");

require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

let posts = [
  {
    id: 1,
    author: "John",
    postContent: "Hello this is a post",
  },
  {
    id: 2,
    author: "Jane",
    postContent: "Whats up?",
  },
  {
    id: 3,
    author: "Frank",
    postContent: "Im hungry",
  },
];

// Get all blog posts
app.get("/posts", async (req, res) => {
  const results = await db.query("SELECT * FROM users");
  console.log(results);
});

// Get a single blog post
app.get("/posts/:id", (req, res) => {
  // const postId = posts.findIndex(posts.id);
  // res.status(200).json(postId);
  res.status(200).json();
  console.log(req.params);
});

// Create blog post
app.post("/posts", (req, res) => {
  console.log(req.body);
  res.status(200).json();
});

// Update post
app.put("/posts/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200);
});

// Delete blog post
app.delete("/posts/:id", (req, res) => {
  res.status(204).json();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
