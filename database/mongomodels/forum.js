var mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var ForumSchema = new mongoose.Schema({
  id: Number,
  question: [
    {
      qnumber: Number,
      qtext: String,
      answers: [
        {
          ansno: Number,
          anstext: String,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Forum", ForumSchema);
