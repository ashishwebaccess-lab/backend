const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return; // already connected (serverless reuse)
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    // process.exit(1) HATA diya — serverless mein ye function ko crash karta hai
  }
};

module.exports = connectDB;