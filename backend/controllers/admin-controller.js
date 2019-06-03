module.exports.getUsers = (app, req, res)=>{
    const UserDAO = new app.database.dao.UserDAO();
    UserDAO.getAllUsers((err, result)=>{
        if(err){
            console.error(err);
            res.send('Problem getting users!');
        }else{
            res.status(200).json({
                users: result
            });
        }
    });   
}

module.exports.getUserByID = (app, req, res)=>{
    const userModel = {
        email: req.body.email
    };
    const UserDAO = new app.database.dao.UserDAO();
    UserDAO.getUserByEmail(userModel, (err, result)=>{
        if(err){
            console.error(err);
            res.send('Problem getting user!');
        }else{
            res.status(200).json({
                user: result
            });
        }
    });
}

module.exports.createUser = (app, req, res)=>{
    const userModel = {
        name: req.body.name,
        job: req.body.job,
        email: req.body.email,
        password: req.body.password
    };
    
    const UserDAO = new app.database.dao.UserDAO();
    UserDAO.createUser(userModel, (err)=>{
        if(err){
            console.error(err);
            res.send('Problem when create new user');
        }else{
            res.status(200).json({
                message: "User created!"
            });
        }
       
    });   
}

module.exports.updateUSer = (app, req, res)=>{
    const userModel = {
        name: req.body.name,
        job: req.body.job,
        email: req.body.email
    };

    const UserDAO = new app.database.dao.UserDAO();
    UserDAO.updateUser(userModel, (err)=>{
        if(err){
            console.error(err);
            res.send('Problem when update user');
        }else{
            res.status(200).json({
                message: "User updated!"
            });
        }
       
    });   
}

module.exports.deleteUser = (app, req, res)=>{
    const userModel = {
        email: req.body.email
    };

    const UserDAO = new app.database.dao.UserDAO();
    UserDAO.deleteUser(userModel, (err)=>{
        if(err){
            console.error(err);
            res.send('Problem when delete user');
        }else{
            res.status(200).json({
                message: "User deleted!"
            });
        }
       
    });  
}

module.exports.generateQRCode = (app, req, res)=>{
    
}