import prisma from "../utils/prisma";

export interface User {
    name: string;
    email: string;
}

export const index = async (): Promise<User[]> => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return users;
}

export const store = async (name: string, email: string, password: string): Promise<boolean> => {
    await prisma.user.create({
        data: { name, email, password },
    });
    return true;
};

export const destroy = async (id: string): Promise<boolean> => {
    await prisma.user.delete({
        where: { id },
    });
    return true;
}
