function UserDAO(connection){
	this._connection = connection();
}



module.exports = function(){
	return UserDAO;
}