//establecer un protcolo 
const app = require('./app');
const http = require('http');

//crear conexion hacia el servidor
const server = http.createServer(app);

//para verificar si el puerto esta disponible
//const port = process.env.PORT || 9000;
server.listen(3000, () => {
    console.log("el servidor esta corriendo");
})