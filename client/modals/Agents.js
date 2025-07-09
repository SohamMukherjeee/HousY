// modals/Agents.js
require("dotenv").config();

const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

const agentDB = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const agentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  agency: String,
  place: String,
  price: Number,
  experience: Number,
  languages: [String],
});

const Agents = agentDB.model("Agents", agentSchema);

module.exports = Agents;
