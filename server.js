import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import { fileURLToPath } from "url";
const port = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup static folder middleware
app.use(express.static(path.join(__dirname, "public")));
// Replacement is Above
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// Logger middleware
app.use(logger);

//Routes
app.use("/api/posts", posts);

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
