import mongoose from "mongoose";

export interface IMessage extends mongoose.Document {
  to: string;
  subject: string;
  content: string;
  sender: any;
  reciever: any;
}

const messageSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false,
  },

  to: {
    type: String,
    required: [true, "Reciever is required"],
  },

  subject: {
    type: String,
    required: [true, "Subject is required"],
    minLength: [4, "Subject must be at least 4 characters long"],
    maxLength: [255, "Subject must be at most 255 characters long"],
  },

  content: {
    type: String,
    required: [true, "Content is required"],
    minLength: [4, "Content must be at least 4 characters long"],
    maxLength: [1024, "Content must be at most 1024 characters long"],
  },

  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  reciever: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
  },
}, {timestamps: true});

messageSchema.index({'$**': 'text'});
messageSchema.index({to: 1});
messageSchema.index({subject: 1});
messageSchema.index({content: 1});

const Message = mongoose.model<IMessage>("Message", messageSchema);
export default Message;
