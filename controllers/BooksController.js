//file system module
const fs = require('fs');
//requiere path
const path = require('path');

const BooksController = {
    index: (req, res) => {
        const mensaje = 'se detecto un ingreso a la ruta'+req.url
        const fechaHora = new Date().toLocaleString();

        //console.log(fechaHora+" - "+mensaje);

     fs.createWriteStream(path.join('logs','general_logs.txt'),{flags: 'a'})
     fs.appendFileSync(path.join('logs','general_logs.txt'), fechaHora+ '-' +mensaje+ '\n');

        //read the file books.json from data directory and get the data
        let data = fs.readFileSync(path.join('data', 'books.json'), 'utf8');
        //parse the data to convert it into an array of objects
        let books = JSON.parse(data);
        //send the response to the client
        //res.send(books);
        res.render('index',{books, title: 'Tienda de libros - Bootcamp', mensaje:"estos son los productos de la tienda"})
    },
    mensaje: (req,res) => {
        fs.mkdir("../LOGS")
        res,send("mensaje desde el controlador de libros ")
    }
}

module.exports = BooksController;