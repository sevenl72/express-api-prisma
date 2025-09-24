import { Router } from 'express';
import { userValidationRules } from '../utils/validators';
import { getUsers, createUser, deleteUser } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.post('/', userValidationRules, createUser);
router.delete('/:id', deleteUser);

export default router;