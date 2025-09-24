import { validationResult } from "express-validator";
import { index, store, destroy } from "../models/user";
import { Request, Response, NextFunction } from "express";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await index();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            errors: errors.array(),
            message: "Validation error",
        });
    }
    try {
        const { name, email, password } = req.body;
        const user = await store(name, email, password);
        res.status(201).json({
            success: user,
            message: "User created successfully",
        });
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const success = await destroy(id);
        res.status(200).json({
            success,
            message: "User deleted successfully",
        });
    } catch (error) {
        next(error);
    }
}