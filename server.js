const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

// Setup static folder middleware
// app.use(express.static(path.join(__dirname, "public")));
// Replacement is Above
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

let posts = [
  { id: 1, title: "Post1" },
  { id: 2, title: "Post2" },
  { id: 3, title: "Post3" },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with id of ${id} was not found` });
  }
  res.status(200).json(post);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
