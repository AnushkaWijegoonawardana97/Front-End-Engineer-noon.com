const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tags: {
    type: Array,
  },
  Image: {
    type: String,
  },
  author: {
    type: String,
    require: true,
  },
  authorEmail: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  isFavourite: {
    type: Boolean,
    default: "false",
  },
  likes: {
    type: Number,
    default: "0",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
