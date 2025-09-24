import { store } from "../models/post";
import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, content } = req.body;
        const post = await store(title, content);
        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
}

export const getPosts = async (req: Request, res: Response) => {
    // Implementation for retrieving posts
}

export const getPostById = async (req: Request, res: Response) => {
    // Implementation for retrieving a single post by ID
}

export const updatePost = async (req: Request, res: Response) => {
    // Implementation for updating a post
}

export const deletePost = async (req: Request, res: Response) => {
    // Implementation for deleting a post
}