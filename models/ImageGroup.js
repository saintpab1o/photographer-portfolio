const mongoose = require("mongoose");

const ImageGroupSchema = mongoose.Schema({
  projectname: {
    type: String,
    required: true,
  },
  srcs: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("ImageGroups", ImageGroupSchema);
