const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true }, // e.g., Apartment, House
  price: { type: Number, required: true },
  area: { type: Number, required: true }, // in sqft
  city: { type: String, required: true },
  pin: { type: String, required: true },
  google_map_link: { type: String, required: true },
  owner_name: { type: String, required: true },
  owner_contact: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  parking_spaces: { type: String, required: true },
  furnishing: {
    type: String,
    enum: ["Fully Furnished", "Semi-Furnished", "Unfurnished"],
    required: true,
  },
  year_built: { type: Number, required: true },
  photos: [{ type: String, validate: (v) => typeof v === "string" }],
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
