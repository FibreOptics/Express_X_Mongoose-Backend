import express from 'express';
import message_controller from '../controllers/message.controller';

const router = express.Router();

router.get('/test', message_controller.test);
//message
router.post('/create', message_controller.message_create);
router.get('/all', message_controller.messages);
router.get('/:id', message_controller.message_details);
router.put('/:id/update', message_controller.message_update);
router.delete('/:id/delete', message_controller.message_delete);

export default router;