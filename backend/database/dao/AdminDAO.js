const userModel = require('./../../models/user-model');
function AdminDAO(){
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


module.exports = function(){
	return AdminDAO;
}