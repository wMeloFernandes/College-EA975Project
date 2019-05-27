const express = require('express');
const router = express.Router();

module.exports = function(app){

    router.route('/admin')
        .get((req, res)=>{
            //GET USER BY ID
        })
        .post((req, res)=>{
            //CREATE USER
        })
        .put((req, res)=>{
            //UPDATE USER
        })
        .delete((req, res)=>{
            //DELETE USER
        });

    router.route('/adminAll')
        .get((req, res)=>{
            //GET ALL USERS
        });

    router.route('/qrCode')
        .get((req, res)=>{
            //GET QR CODE
        });

    router.route('/user')
        .get((req, res)=>{
            //GET CLOCK REGISTER
        })
        .post((req, res)=>{
            //CLOCKIN
        });

}