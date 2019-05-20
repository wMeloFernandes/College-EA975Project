module.exports.makeLogin = (app,req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const UserDAO = new app.database.dao.UserDAO(app.database.db-Connection);

    const dataObject = {
        username: username,
        password: password
    };

    UserDAO.login(dataObject, (err, result)=>{
        if(err){
            res.status(401).json({
                message: ''
            });
        }else{
            res.status(200).json({
                message: ''
            });
        }
    })

}