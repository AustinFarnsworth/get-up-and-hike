const express = require("express");
const db = require("./db");

require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

// dummy data
// let posts = [
//   {
//     id: 1,
//     author: "John",
//     postContent: "Hello this is a post",
//   },
//   {
//     id: 2,
//     author: "Jane",
//     postContent: "Whats up?",
//   },
//   {
//     id: 3,
//     author: "Frank",
//     postContent: "Im hungry",
//   },
// ];

// Get all blog posts
app.get("/posts", async (req, res) => {
  const blogPosts = await db.query("SELECT * FROM users");
  res.status(200).send(blogPosts.rows);
});

// Get a single blog post
app.get("/posts/:id", async (req, res) => {
  const {id} = req.params;
  const {rows} = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  res.send(rows[0]);
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
