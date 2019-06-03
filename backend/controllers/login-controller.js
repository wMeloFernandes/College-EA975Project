module.exports.makeUserLogin = (app,req, res)=>{
    const userModel = {
        email: req.body.email,
        password: req.body.password
    };

    const AdminDAO = new app.database.dao.AdminDAO();
    AdminDAO.validateUser(userModel, (err, result)=>{
        if(err){
            console.error(err);
            res.status(500).json({
                message: 'Problem getting user!'
            });
        }else{
            if(result.length >0){
                res.status(200).json({
                    user: result
                });
            }else{
                res.status(401).json({
                    
                });
            }
        }
    });
}

module.exports.makeAdminLogin = (app, req, res)=>{

}