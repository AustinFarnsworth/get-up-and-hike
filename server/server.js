const express = require("express");
const db = require("./db");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
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

// ~~~~~~~~~~~~~~~~ POST ROUTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Get all blog posts
app.get("/posts", async (req, res) => {
  const blogPosts = await db.query("SELECT * FROM blog_post");
  res.status(200).json({
    blogPosts: blogPosts.rows.length,
    data: {
      posts: blogPosts.rows,
    },
  });
});

// Get a single blog post
app.get("/posts/:id", async (req, res) => {
  const {id} = req.params;
  const {rows} = await db.query("SELECT * FROM blog_post WHERE id = $1", [id]);
  res.send(rows[0]);
});

// Create blog post
app.post("/posts", async (req, res) => {
  console.log(req.body);

  try {
    const {rows} = await db.query(
      "INSERT INTO blog_post (user_id, blog_image, blog_title, date_posted, post_content) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        req.body.user_id,
        req.body.blog_image,
        req.body.blog_title,
        req.body.date_posted,
        req.body.post_content,
      ]
    );
    res.status(200).json({
      status: "Sucessfully Added to Database",
      blogPosts: rows.length,
      data: {
        posts: rows,
      },
    });
    console.log(rows);
  } catch (err) {
    console.log(err);
  }
});

// Update post
app.put("/posts/:id", async (req, res) => {
  try {
    const {rows} = await db.query(
      "UPDATE blog_post SET user_id = $1, blog_image = $2, blog_title = $3, date_posted = $4, post_content = $5 WHERE id = $6 RETURNING *",
      [
        req.body.user_id,
        req.body.blog_image,
        req.body.blog_title,
        req.body.date_posted,
        req.body.post_content,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "Successfully updated post",
    });
  } catch (err) {
    console.log(err);
  }
});

// Delete blog post
app.delete("/posts/:id", async (req, res) => {
  try {
    const {rows} = await db.query("DELETE FROM blog_post WHERE id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "Successfully deleted post",
    });
  } catch (err) {
    console.log(err);
  }
});

// ~~~~~~~~~~~~~~~~~ USER ROUTES ~~~~~~~~~~~~~~~~~~~~

// Create User
app.post("/register", async (req, res) => {
  try {
    const users = await db.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password,
      ]
    );
    res.status(200).json({
      status: "Sucessfully Added User to Database",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
