import express, { Request, Response, NextFunction } from 'express';
import { ProductModel } from './product.interface';
 
const productRoutes = express.Router();
 
productRoutes.get('/todo', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        let items: any = await ProductModel.find({});
        items = items.map((item: any) => { return item; });
        resp.json(items);
    } catch (err) {
        resp.status(500);
        resp.end();
        console.error('Caught error', err);
    }
});
 
productRoutes.post('/todo', async (req: Request, resp: Response, next: NextFunction) => {
    const {title, src, description} = req.body;
    const todo = new ProductModel({ title, src, description });
    await todo.save();
    resp.end();
});
 
productRoutes.put('/todo/:id', async (req: Request, resp: Response, next: NextFunction) => {
    const description = req.body['description'];
    const id = req.params['id'];
    await ProductModel.findByIdAndUpdate(id, {description: description});
 
    resp.end();
});
 
productRoutes.delete('/todo/:id', async (req: Request, resp: Response, next: NextFunction) => {
    const id = req.params['id'];
 
    await ProductModel.findByIdAndRemove(id);
    resp.end();
});
 
export { productRoutes };