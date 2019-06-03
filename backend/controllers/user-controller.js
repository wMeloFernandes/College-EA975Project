module.exports.clockIn = (app, req, res)=>{
    const clockModel = {
        email: req.body.email,
        timestamp: req.body.timestamp
    };
    
    const ClockDAO = new app.database.dao.ClockDAO();
    ClockDAO.clockIn(clockModel, (err)=>{
        if(err){
            console.error(err);
            res.send('Problem when register time');
        }else{
            res.status(200).json({
                message: "Time registered!"
            });
        }
       
    });
}

module.exports.getClockRegister = (app, req, res)=>{

}
