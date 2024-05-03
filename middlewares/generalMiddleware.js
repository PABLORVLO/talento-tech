//file system module
const fs = require('fs');
//requiere path
const path = require('path');

const generalMiddleware=(req, res, next)=>{
const mensaje = 'se detecto un ingreso a la ruta'+req.url
const fechaHora = new Date().toLocaleString();

//console.log(fechaHora+" - "+mensaje);

fs.createWriteStream(path.join('logs','general_logs.txt'),{flags: 'a'})
fs.appendFileSync(path.join('logs','general_logs.txt'), fechaHora+ '-' +mensaje+ '\n');
next(); //continua con la ejecucion normal de la soilicitud.
};

module.exports = generalMiddleware;