const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const app = express();

connectDB();
app.use(cors());
app.get("/", (request, response) => response.send("API is running..."));

app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/favourite", require("./routes/api/favourite"));

// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/next"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "next", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Started on port "));
