import prisma from "../utils/prisma";

export interface Post {
    title: string;
    content: string;
}

export const index = async (): Promise<Post[]> => {
    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    return posts;
};

export const store = async (title: string, content: string): Promise<Post> => {
    const post = await prisma.post.create({
        data: { title, content },
    });
    return post;
}

export const destroy = async (id: string): Promise<boolean> => {
    await prisma.post.delete({
        where: { id },
    });
    return true;
}