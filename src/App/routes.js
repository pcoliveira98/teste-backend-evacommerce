const { Router } = require('express');
const multer = require('multer');

const multerConfig = require('../config/multer');

const userController = require('../App/controllers/User');
const sessionController = require('../App/controllers/Session');
const productController = require('../App/controllers/Product');

const authMiddleware = require('../App/middlewares/auth');

const routes = new Router();
const upload = multer(multerConfig);

//Rota para cadastro de usuário
routes.post('/users', userController.store);

//Rota para login
routes.post('/sessions', sessionController.store);

//Middleware de autenticação
routes.use(authMiddleware);

//Rota para listagem de produtos
routes.get('/products', productController.index);

//Rota para cadastro de produtos e imagens
routes.post('/products', upload.array('images', 3), productController.store);

//Rota para exclusão de produtos
routes.delete('/products/:id', productController.delete);

module.exports = routes;