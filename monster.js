var mongoose = require('./db.js').mongoose;

var monsterSchema = mongoose.Schema
({
   name: String,
   level: Number,
   desc: String
});

var Monster = mongoose.model('Monster', monsterSchema);

exports.Monster = Monster;