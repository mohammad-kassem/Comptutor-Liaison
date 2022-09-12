import mongoose from "mongoose";

export interface IContact extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
  relationship: string;
  location: any;
  country: string;
  user: any;
  liker: any;
  messages: any[];
}

const contactSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false,
  },

  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [6, "Name must be at least 6 characters long"],
    maxLength: [255, "Name must be at most 255 characters long"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    minLength: [6, "Email must be at least 6 characters long"],
    maxLength: [255, "Email must be at most 255 characters long"],
  },

  phone: {
    type: String,
    required: [true, "Phone is required"],
    minLength: [6, "Phone must be at least 6 characters long"],
    maxLength: [255, "Phone must be at most 255 characters long"],
  },

  relationship: {
    type: String,
    required: [true, "Relationship is required"],
    enum: {
      values: ["Single", "Married", "Divorced", "Widowed", "Other"],
      message: "{VALUE} is not a valid relationship status",
    },
  },

  location: {
    type: Object,
    required: [true, "Location is required"],
  },

  country: {
    type: String,
    required: [true, "Country is required"],
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  liker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
}, {timestamps: true});

const Contact = mongoose.model<IContact>("Contact", contactSchema);
export default Contact;
