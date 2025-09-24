import { Router } from 'express';
import { postValidationRules } from '../utils/validators';
import { getPosts } from '../controllers/postController';

const router = Router();

router.get('/', postValidationRules, getPosts);

export default router;
