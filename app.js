var express = require('express');  

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

 
// Routes

// home
app.get('/', routes.home);

app.get('/staff', routes.staff);

app.get('/adress', routes.adress);

app.get('/thank_you', routes.thank_you);

app.get('/pricelist', routes.pricelist);

app.get('/appointment', routes.appointment);

app.get('/uslugi/:item_number?', routes.uslugi);



// notFound
app.get('*', routes.notFound); 

app.listen(process.env.PORT || 3000);