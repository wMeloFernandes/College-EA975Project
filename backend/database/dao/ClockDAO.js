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


module.exports = function(){
	return ClockDAO;
}