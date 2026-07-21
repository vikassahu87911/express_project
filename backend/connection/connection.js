// connection for database
const mongoose = require('mongoose');
async function connectDB() {
  try {
    const dburl = process.env.url;
    console.log("Connecting to MongoDB...");

    await mongoose.connect(dburl);
    console.log("Connected to MongoDB");

  } catch (error) {
    console.error("Connection Error:");
    console.error(error);
  }
}

module.exports = connectDB;