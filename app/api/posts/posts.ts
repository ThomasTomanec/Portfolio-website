import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
        break;
      case 'POST':
        const { title, content } = req.body;
        const newPost = await prisma.post.create({
          data: {
            title,
            content,
            date: new Date().toISOString(), // Použití ISO formátu pro datum
          },
        });
        res.status(201).json(newPost);
        break;
      case 'PUT':
        const { id, title: updatedTitle, content: updatedContent } = req.body;
        const updatedPost = await prisma.post.update({
          where: { id },
          data: {
            title: updatedTitle,
            content: updatedContent,
          },
        });
        res.status(200).json(updatedPost);
        break;
      case 'DELETE':
        const { id: deleteId } = req.body;
        await prisma.post.delete({
          where: { id: deleteId },
        });
        res.status(204).end();
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect(); // Ujistěte se, že PrismaClient je vždy odpojen
  }
}
