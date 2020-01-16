const http = require ('http');

http.createServer( (req,res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida= {
        nombre: 'Fernando',
        edad: 44,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log('Servidor iniciado en puerto 8080');




