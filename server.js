const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.get("/", (request, response) => response.send("API is running..."));

app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/favourite", require("./routes/api/favourite"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Started on port "));
