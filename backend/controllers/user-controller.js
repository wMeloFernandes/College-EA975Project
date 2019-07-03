module.exports.clockIn = (app, req, res)=>{
    const key = req.body.key;
    if(key== global.qrCodeKey){
        const clockModel = {
            email: req.body.email,
            timestamp: new Date()
        };
        
        const ClockDAO = new app.database.dao.ClockDAO();
        ClockDAO.clockIn(clockModel, (err)=>{
            if(err){
                console.error(err);
                res.status(500).json({
                    message: 'Problem when register time'
                });
            }else{
                res.status(200).json({
                    message: "Time registered!"
                });
            }
           
        });
    }else{
        res.status(204).json({
            message: "Invalid key"
        });
    }
}

module.exports.getClockRegister = (app, req, res)=>{
    const clockModel = {
        email: req.query.email
    };

    const ClockDAO = new app.database.dao.ClockDAO();
    ClockDAO.getRegisters(clockModel, (err, result)=>{
        if(err){
            console.error(err);
            res.send('Problem when get registers time');
        }else{
            res.status(200).json({
                registers: result
            });
        }
       
    });

}
