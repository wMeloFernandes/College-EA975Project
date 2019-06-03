module.exports.getUsers = (app, req, res)=>{
        
}

module.exports.getUserByID = (app, req, res)=>{

}

module.exports.createUser = (app, req, res)=>{
    const userModel = {
        name: req.body.name,
        job: req.body.job,
        email: req.body.email,
        password: req.body.password
    };
    
    const AdminDAO = new app.database.dao.AdminDAO();
    AdminDAO.createUser(userModel, (err)=>{
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

    const AdminDAO = new app.database.dao.AdminDAO();
    AdminDAO.updateUSer(userModel, (err)=>{
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
        name: req.body.name,
        email: req.body.email
    };

    const AdminDAO = new app.database.dao.AdminDAO();
    AdminDAO.deleteUser(userModel, (err)=>{
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