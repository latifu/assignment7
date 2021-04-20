import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
    gender: {
      type: String,
      required: [true, "Enter your gender"],
    },
  },
  {
    timestamps: true,
  }
);
export default model("Student", studentSchema);
