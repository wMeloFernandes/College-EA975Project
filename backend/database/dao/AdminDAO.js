const userModel = require('./../../models/user-model');

function AdminDAO(){
}

AdminDAO.prototype.getAllUsers = function(callback){
	userModel.find({}, (err, result)=>{
		callback(err, result);
	});
}

AdminDAO.prototype.getUserByEmail = function(data, callback){
	userModel.findOne(data, (err, result)=>{
		callback(err, result);
	})
}

AdminDAO.prototype.createUser = function(data, callback){
	var db = new userModel();
    db.name = data.name;
    db.job = data.job;
    db.email = data.email;
    db.password  = data.password;
    db.save((err)=>{
        callback(err);
    });  
}

AdminDAO.prototype.updateUser = function(data, callback){
	userModel.findOneAndUpdate({"email":data.email}, {name: data.name, job:data.job}, (err, result)=>{
		callback(err, result);
	});
}

AdminDAO.prototype.deleteUser = function(data, callback){
	userModel.findOneAndRemove(data, (err, result)=>{
		callback(err, result);
	});
}

module.exports = function(){
	return AdminDAO;
}