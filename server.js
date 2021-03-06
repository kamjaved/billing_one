const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect to MongoDB Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/staff", require("./routes/api/staff"));
app.use("/api/customer", require("./routes/api/customer"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Started on port " + PORT));
