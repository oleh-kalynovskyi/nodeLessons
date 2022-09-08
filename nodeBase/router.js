import Router from 'express';
import PostController from './PostController.js';

const router = new Router()

//endpoints
router.post('/post', PostController.create)
router.get('/post', PostController.getAll)
router.get('/post/:id', PostController.getById)
router.put('/post', PostController.update)
router.delete('/post/:id', PostController.delete)

export default router;