import express from 'express';
import user_controller from '../controllers/user.controller';

const router = express.Router();

router.get('/test', user_controller.test);
//user
router.post('/create', user_controller.user_create);
router.get('/all', user_controller.users);
router.get('/:id', user_controller.user_details_bid);
router.get('/login/:email/:pass', user_controller.user_details_bmail);
router.put('/:id/update', user_controller.user_update);
router.delete('/:id/delete', user_controller.user_delete);
//friends
router.get('/friends/:email',user_controller.friends);

export default router;