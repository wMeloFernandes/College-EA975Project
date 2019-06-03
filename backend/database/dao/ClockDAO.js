const clockModel = require('./../../models/clock-model');
function ClockDAO(){
}


ClockDAO.prototype.clockIn = function(data, callback){
	var db = new clockModel();
	db.email = data.email;
	db.timestamp = data.timestamp;
	db.save((err)=>{
		callback(err);
	});
}

ClockDAO.prototype.getRegisters = function(data, callback){
	clockModel.find(data, (err, result)=>{
		callback(err, result);
	})
}


module.exports = function(){
	return ClockDAO;
}