import mongoose from "mongoose";
import dns from "dns";
dns.setServers(["8.8.8.8","8.8.4.4"])

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://suryaneerukonda24_db_user:Bhargav@2006@cluster0.dswlf2o.mongodb.net/bhargavAppname=cluster0");

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
