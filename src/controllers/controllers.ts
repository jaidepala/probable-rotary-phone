import express from 'express';
// Controllers
import { productRoutes } from './products/product.controller';

const router = express.Router();

router.use('/api/product', productRoutes);

export = router;