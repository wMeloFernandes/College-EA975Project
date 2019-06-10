var jwt = require('jsonwebtoken');

module.exports.makeUserLogin = (app,req, res)=>{
    const userModel = {
        email: req.body.email,
        password: req.body.password
    };

    const UserDAO = new app.database.dao.UserDAO();
    UserDAO.validateUser(userModel, (err, result)=>{
        if(err){
            console.error(err);
            res.status(500).json({
                message: 'Problem getting user!'
            });
        }else{
            if(result.length >0){
                const token = jwt.sign(
                    { email: userModel.email, id: result[0]._id},
                    "BV3WdFPNddaTPcDigHWgGJLGCLHBn4p9",
                    { expiresIn: "1h" }
                  );
                res.status(200).json({
                    token: token
                });
            }else{
                res.status(401).json({
                    message: "Unauthorized!"
                });
            }
        }
    });
}

module.exports.makeAdminLogin = (app, req, res)=>{

}