const LoginController = require('./../controllers/login-controller');

module.exports = function(app){

    app.route('/login')
        .post((req, res)=>{
            LoginController.makeUserLogin(app, req, res);
        });

    app.route('/loginAdm')
        .post((req, res)=>{
            LoginController.makeAdminLogin(app, req, res);
        });

}