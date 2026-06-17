import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const port = process.env.PORT || 8000;

const app = express();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup static folder middleware
// app.use(express.static(path.join(__dirname, "public")));
// Replacement is Above
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//Routes
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));
