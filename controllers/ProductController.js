// controllers/ProductController.js
import Product from '../models/ProductModel.js';

const getAllProducts = async (req, res) => {
  const productId = req.params.productId;
  Product.findOne({ "product_id": productId })
  .then(product => {
    if (product) {
      res.json(product)
    } else {
      res.status(401).json({mssg:'product not found!'})
      
    }
  })
  .catch(error => {
    console.error('Error finding product:', error);
  });
 };

export default getAllProducts
