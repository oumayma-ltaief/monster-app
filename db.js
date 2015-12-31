var mongoose = require('mongoose');
mongoose.connect('mongodb://<username>:<password>@<server_url>:<port>/<DB_name>');
var db = mongoose.connection;

db.on('error', function(error)
{
  console.log("error DB"+ error);
});

db.on('open', function()
{
  console.log("success DB");
});

exports.mongoose = mongoose;
