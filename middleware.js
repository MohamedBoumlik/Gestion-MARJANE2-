const jwt = require('jsonwebtoken');

// ---------------------- Admin ----------------------

exports.middlewareAdmin = (req,res,next) => {
    let dataToken = req.cookies.adminToken;

    if (dataToken) {

        jwt.verify(dataToken, `${process.env.JWT_SECRET_KEY}`, (err,decode)=> {
            if (decode.role == 'admin') {
                next()
            }else{
                res.render('view/login')
            }
        })

    }else{
        res.render('view/login')
    }
}

// ---------------------- Center Admin ----------------------

exports.middlewareCA = (req,res,next) => {
    let CAtoken = req.cookies.CAtoken;
    
    if (CAtoken) {
        
        jwt.verify(CAtoken, `${process.env.JWT_SECRET_KEY}`, (err,decode)=> {
            if (decode.role == 'CAdmin') {
                next()
            }else{
                res.render('view/loginCA')
            }
        })

    }else{
        res.render('view/loginCA')
    }
}

// ---------------------- Chef ----------------------

exports.middlewareChef = (req,res,next) => {
    let chefToken = req.cookies.chefToken;

    if(chefToken) {
        
        jwt.verify(chefToken, `${process.env.JWT_SECRET_KEY}`, (err,decode)=> {
            if (decode.role == 'chef') {
                // console.log(decode);
                res.cookie('cRayon',decode.rayon )
                next()
            }else{
                res.render('view/loginChef')
            }
        })

    }else{
        res.render('view/loginChef')
    }
}