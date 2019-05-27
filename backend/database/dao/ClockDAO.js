function ClockDAO(connection){
	this._connection = connection();
}



module.exports = function(){
	return ClockDAO;
}