import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    try {
        console.log('Fetching blog with ID:', id); // Debugging log

        const blog = await db.blog.findUnique({
            where: { id: String(id) },
        });
        console.log(blog);
        if (!blog) {
            return res.status(404).json({ message: 'Blog nenalezen.' });
        }

        console.log('Fetched blog:', blog); // Debugging log
        res.status(200).json(blog);
    } catch (error) {
        console.error('Chyba při načítání blogu:', error);
        res.status(500).json({ message: 'Chyba serveru.' });
    }
}

