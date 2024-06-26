const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/BooksController');
const generalMiddleware = require('../middlewares/generalMiddleware')


/* GET home page. */
router.get('/',generalMiddleware, BooksController.index);
router.get('/mensaje', BooksController.mensaje);

module.exports = router;
