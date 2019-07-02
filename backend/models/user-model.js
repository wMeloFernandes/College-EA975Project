var mongoose = require("mongoose");
var conn = mongoose.createConnection('mongodb://localhost:27017/SAP', {useNewUrlParser: true});
var Schema = mongoose.Schema;
var userSchema = new Schema({
    "name": String,
    "job": String,
    "email": String,
    "password": String
});
module.exports = conn.model('users', userSchema);
