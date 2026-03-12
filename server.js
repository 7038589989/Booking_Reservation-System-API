const express = require("express");
const cors = require("cors");
const resourceRoutes = require("./routes/resourceRoutes");


require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/resources", resourceRoutes);

app.get("/", (req, res) => {
    res.send("Booking System API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});