import express from 'express';
const router = express.Router();
import getAllProducts from '../controllers/ProductController.js'

// Define a route
router.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

router.get('/api/foods/:productId',  getAllProducts);


// export the router module so that server.js file can use it
export default router;