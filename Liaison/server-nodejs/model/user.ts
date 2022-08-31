import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
  contacts: any[];
  role: any;
  messages: any[];
  likes: any[];
}

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "First name is required"],
    minLength: [2, "First name must be at least 2 characters"],
    maxLength: [255, "First name must be at most 225 character"],
  },

  lname: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [2, "Last name must be at least 2 characters"],
    maxLength: [255, "Last name must be at most 225 character"],
  },

  email: {
    type: String,
    required: [true, "Email address is required"],
    minLength: [6, "Email address must be at least 6 characters"],
    maxLength: [255, "Email address must be at most 255 characters"],
    unique: true,
  },

  password: {
    type: String,
    select: false,
    required: [true, "Password is required"],
    minLength: [6, "Password must be at least 6 characters"],
    maxLength: [1024, "Password must be at most 1024 characters"],
  },

  contacts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact",
    },
  ],

  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },

  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact",
    },
  ],
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
