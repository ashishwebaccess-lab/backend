const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
    type: String,
    required: true,
    enum: [
      "Commercial",
      "Residential",
      "Kitchens",
      "Wardrobes",
      "TV Units",
      "Exterior",
      "Interior",
      "Renovation"
    ]
},

    mediaType: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },

    mediaUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Project",
  projectSchema
);