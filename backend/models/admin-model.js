var mongoose = require("mongoose");
conn = mongoose.createConnection('mongodb://localhost:27017/975system', {useNewUrlParser: true});
var Schema = mongoose.Schema;
var adminSchema = new Schema({
    "name": String,
    "job": String,
    "email": String,
    "password": String
});
module.exports = conn.model('admin', adminSchema);
