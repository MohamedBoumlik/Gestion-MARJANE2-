const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.set('views','./src');
app.set('view engine','ejs');

app.use(express.static('src'))
app.use(cookieParser())

const {middlewareAdmin, middlewareCA, middlewareChef} = require('./middleware')

app.get('/', (req,res)=> {
    res.render('view/login')
});

app.get('/Center_Admin', (req,res)=> {
    res.render('view/loginCA')
});

app.get('/chef', (req,res)=> {
    res.render('view/loginChef')
});

app.get("/AdminDash",middlewareAdmin, (req,res)=> {
    res.render('view/Admin', )
});

app.get("/centerAdminDash/", middlewareCA, (req,res)=> {
    res.render('view/centerAdmin')
});

app.get("/ChefDash", middlewareChef, (req,res)=> {
    res.render('view/chef')
});

app.get('/promotions', (req,res)=> {
    res.render('view/promotions')
})

app.listen(4000);