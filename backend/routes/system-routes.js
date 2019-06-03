const AdminController = require('./../controllers/admin-controller');
module.exports = function(app){

    app.route('/admin')
        .get((req, res)=>{
        })
        .post((req, res)=>{
            //AdminController.createUser(app, req, res);
        })
        .put((req, res)=>{
            //UPDATE USER
        })
        .delete((req, res)=>{
            //DELETE USER
        });

    app.route('/adminAll')
        .get((req, res)=>{
            //GET ALL USERS
        });


    app.route('/qrCode')
        .get((req, res)=>{
            //GET QR CODE
        });

    app.route('/user')
        .get((req, res)=>{
            //GET CLOCK REGISTER
        })
        .post((req, res)=>{
            //CLOCKIN
        });

}