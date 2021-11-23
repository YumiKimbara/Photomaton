const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postsSchema = new Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", postsSchema);
