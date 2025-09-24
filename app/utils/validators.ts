import prisma from "../utils/prisma";
import { body } from "express-validator";

export const userValidationRules = [
    body('name').notEmpty().escape().withMessage('Name is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required').custom(async (value) => {
        const existingUser = await prisma.user.findUnique({
            where: { email: value },
        });
        if (existingUser) {
            throw new Error('This email is already in use.');
        }
    }),
];

export const postValidationRules = [
    body('title').notEmpty().escape().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required'),
];