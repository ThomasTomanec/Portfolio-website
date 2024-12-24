import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import BlogTable from '../../_components/blog/BlogTable';
import { revalidatePath } from "next/cache";

export default async function BlogPage() {
    const blogs = await db.blog.findMany();



    const handleDelete = async (id: string) => {
        'use server';
        try {
            await db.blog.delete({
                where: { id },
            });
            // Revalidace cesty po mazání
            revalidatePath("/dashboard/blogs");
        } catch (error) {
            console.error("Chyba při mazání blogu:", error);
            alert("Chyba při mazání blogu.");
        }
    };

    return (
        <div className="min-h-screen p-4 ml-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Seznam Blogů</h1>
                <Link href="/dashboard/blog/create-blog">
                    <button className="p-2 bg-blue-500 text-white rounded-lg">
                        Přidat nový blog
                    </button>
                </Link>
            </div>
            <BlogTable blogs={blogs} onDelete={handleDelete} />
        </div>
    );
}
