import express from 'express';
import product_controller from '../controllers/example.controller';

const router = express.Router();

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
//CRUD route to the functions in contoller
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);

export default router;