import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  roomNumber: [{ number: Number, unavaiableDates: [{ type: Date }] }],
});

export default mongoose.model("Room", RoomSchema);
