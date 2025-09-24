import { Router } from 'express';
import { authenticateToken } from '../middlewares/authMiddleware';
import { register, login, getAuthUser } from '../controllers/authController';

const router = Router();

router.post('/login', login);
router.post('/register', register);

router.get('/', authenticateToken, getAuthUser);

export default router;