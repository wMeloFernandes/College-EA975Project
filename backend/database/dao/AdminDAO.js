function AdminDAO(connection){
	this._connection = connection();
}



module.exports = function(){
	return AdminDAO;
}