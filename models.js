var mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://hackreactortest:${process.env.PASSWORD}@cluster0-k0vmg.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true});
// mongodb://localhost/menu   if you want to seed locally
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database!!!!')
});

var menuSchema = new mongoose.Schema({
  item_name: String,
  description: String,
  price: Number,
  popular: Boolean,
  special_instruction: Boolean,
  extras: {
    type: [
      {
        name: String,
        price: Number
      }
    ],
    default: undefined
  },
  restaurant_id: Number,
  photo_URL: String
});

var menu = mongoose.model("menu", menuSchema);

module.exports = menu;
