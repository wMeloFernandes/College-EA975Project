var mongoose = require("mongoose");
conn = mongoose.createConnection('mongodb://localhost:27017/975system', {useNewUrlParser: true});
var Schema = mongoose.Schema;
var clockSchema = new Schema({
    "email": String,
    "timestamp": String
});
module.exports = conn.model('clockPoint', clockSchema);
