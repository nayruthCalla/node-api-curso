const { dbUrl } = require('../config');
const modelDataBase = require('../models/general-model');

const productModel = modelDataBase('products', dbUrl);

const modelController = require('../controllers/product-controller');

const productController = modelController(productModel);

const {
  requireAuth,
  requireAdmin,
} = require('../middleware/auth');

module.exports = (app, nextMain) => {
  
  app.get('/products', requireAuth, productController.controllerGetAllProductsDB);
 
  app.get('/products/:productId', requireAuth, productController.controllerGetProductById);

  app.post('/products', requireAdmin, productController.controllerCreateProduct);

  app.put('/products/:productId', requireAdmin, productController.controllerPutProduct);

  app.delete('/products/:productId', requireAdmin, productController.controllerDeleteProduct);

  nextMain();
};
