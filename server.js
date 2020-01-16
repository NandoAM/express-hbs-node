const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');


const port = process.env.PORT || 3000;

app.use( express.static ( __dirname + '/public') )

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


 
/*
llamadas a get con la librería estandar http

app.get('/', function (req, res) {
  //res.send('Hola Mundo')
  let salida= {
    nombre: 'Fernando',
    edad: 44,
    url: req.url
   }

   res.send(salida);

});

app.get('/hola', function (req, res) {
    res.send('Hola Mundo')
});*/

app.get('/', function (req, res) {
 
   res.render('home.hbs', {
     nombre: 'fernando'   
   });

});

app.get('/about', function (req, res) {
 
  res.render('about.hbs');

});

 
app.listen(port, () => console.log(`Servidor escuchando peticiones en el puerto ${port}`));