import mongoose from "mongoose";

export interface IRole extends mongoose.Document {
  role: string;
  users: any[];
}

const roleSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false,
  },

  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
  },

  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Role = mongoose.model<IRole>("Role", roleSchema);
export default Role;
