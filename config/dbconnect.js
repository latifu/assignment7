import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/assignment7", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err.message));
