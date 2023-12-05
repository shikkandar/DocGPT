import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  const DB_OPTIONS = {
    dbName: "user_database"
  };
  await mongoose
    .connect(DATABASE_URL, DB_OPTIONS)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default connectDB;