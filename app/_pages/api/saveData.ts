import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const SendToDatabase = async (email: string, telefone: string) => {
    return await prisma.user.create({
        data: {
            email: email,
            whatsapp: telefone,
        },
    });
}

export default SendToDatabase;