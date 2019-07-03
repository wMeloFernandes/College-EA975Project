const AdminController = require('./../controllers/admin-controller');
const UserController = require('./../controllers/user-controller');
const checkAuth = require('./../middleware/check-auth-app');


module.exports = function(app){

    app.route('/admin')
        .get((req, res)=>{
            AdminController.getUserByID(app, req, res);
        })
        .post((req, res)=>{
            AdminController.createUser(app, req, res);
        })
        .put((req, res)=>{
            AdminController.updateUSer(app, req, res);
        })
        .delete((req, res)=>{
            AdminController.deleteUser(app, req, res);
        });

    app.route('/adminAll')
        .get((req, res)=>{
            AdminController.getUsers(app, req, res);
        })
        .post((req, res)=>{
            AdminController.createAdmin(app, req, res);
        })


    app.route('/qrCode')
        .get((req, res)=>{
            AdminController.generateQRCode(app, req, res);
        });

    app.route('/time')
        .get((req, res)=>{
            UserController.getClockRegister(app, req, res);
        });
    

    app.route('/user')
        .get(checkAuth, (req, res)=>{
            UserController.getClockRegister(app, req, res);
        })
        .post( (req, res)=>{
            UserController.clockIn(app, req, res);
        });

}