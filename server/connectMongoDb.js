import mongoose from "mongoose";
mongoose.set('strictQuery',false)
const URL=process.env.MONGO_URL
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;