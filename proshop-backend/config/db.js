import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
    });

    console.log(`MongoDb connected: ${conn.connection.host}`.green.bold);
  } catch (err) {
    console.error(`Error : ${err.message}`.red);
    process.exit(1);
  }
};
export default connectDB;
