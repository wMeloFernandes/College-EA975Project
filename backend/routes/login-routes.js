const LoginController = require('./../controllers/login-controller');

module.exports = function(app){

    app.route('/login')
        .post((req, res)=>{
            res.send('OIA');
        });

    app.route('/loginAdm')
        .post((req, res)=>{
            //ADM CONTROLLER
        });

}