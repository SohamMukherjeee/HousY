const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const path = require("path");
const Property = require("./modals/Property");
const Agents = require("./modals/Agents");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://housy-frontend.onrender.com"]
    : ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
const mongoURI = process.env.MONGO_URI;

const port = process.env.PORT || 5000;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/agents", async (req, res) => {
  try {
    const agents = await Agents.find();
    res.json(agents);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch agents" });
  }
});

app.get("/search", async (req, res) => {
  const { q } = req.query;
  try {
    const results = await Property.find({
      $or: [
        { city: { $regex: q, $options: "i" } },
        { pin: { $regex: q, $options: "i" } },
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error in search" });
  }
});
app.get("/prop", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});
app.get("/prop/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/sell", async (req, res) => {
  try {
    const {
      title,
      description,
      type,
      price,
      area,
      city,
      pin,
      google_map_link,
      owner_name,
      owner_contact,
      bedrooms,
      bathrooms,
      parking_spaces,
      furnishing,
      year_built,
      photos,
    } = req.body;

    const newProperty = new Property(req.body);
    await newProperty.save();

    res.json({ message: "Property listed successfully" });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`listening`);
});
