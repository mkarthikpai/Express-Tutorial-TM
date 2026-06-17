const express = require("express");
const path = require("path");
const app = express();
const posts = require("./routes/posts");
const port = process.env.PORT || 8000;

// Setup static folder middleware
// app.use(express.static(path.join(__dirname, "public")));
// Replacement is Above
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//Routes
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));
