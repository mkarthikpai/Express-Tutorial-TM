const express = require("express");
const path = require("path");
const app = express();

// Setup static folder middleware
// app.use(express.static(path.join(__dirname, "public")));
// Replacement is Above
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(8000, () => console.log(`Server is running on port 8000`));
