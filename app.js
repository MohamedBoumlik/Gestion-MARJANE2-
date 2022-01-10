const express = require('express');
const app = express();
// const {deleteCenter} = require('./src/controller/admin');

// console.log(dataGet);

app.set('views','./src');
app.set('view engine','ejs');

app.use(express.static('src'))

app.get('/', (req,res)=> {
    res.render('view/login')
});

app.get('/Center_Admin', (req,res)=> {
    res.render('view/loginCA')
});

app.get('/chef', (req,res)=> {
    res.render('view/loginChef')
});

app.get("/AdminDash", (req,res)=> {
    res.render('view/Admin', )
});

app.get("/centerAdminDash/", (req,res)=> {
    res.render('view/centerAdmin')
});

app.get('/promotions', (req,res)=> {
    res.render('view/promotions')
})

app.listen(4000);