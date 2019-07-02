const adminModel = require('./../../models/admin-model');

function AdminDAO(){
}

AdminDAO.prototype.createUser = function(data, callback){
	var db = new adminModel();
    db.name = data.name;
    db.email = data.email;
    db.password  = data.password;
    db.save((err)=>{
        callback(err);
    });  
}

module.exports = function(){
	return AdminDAO;
}