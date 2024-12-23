'use client';

import React, { useState } from 'react';
import { editBlog } from '@/actions/blogs';
import { useRouter } from 'next/navigation';

type Blog = {
    id: string;
    name: string;
    content: string;
};

type Props = {
    blog: Blog;
    onClose: () => void;
};

export default function EditBlogForm({ blog, onClose }: Props) {
    const [name, setName] = useState(blog.name);
    const [content, setContent] = useState(blog.content);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", name);
        formData.append("content", content);

        try {
            await editBlog(formData, blog.id);
            router.refresh(); // Obnov data na stránce
            onClose(); // Zavři formulář
        } catch (error) {
            console.error("Chyba při úpravě blogu:", error);
            alert("Něco se pokazilo při úpravě blogu. Zkuste to znovu.");
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                <h2 className="text-xl font-bold mb-4">Upravit blog</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="title" className="block">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="block">Content:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg w-full"
                            rows={5}
                            required
                        />
                    </div>
                    <div className="flex gap-4">
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
                            Uložit změny
                        </button>
                        <button type="button" onClick={onClose} className="p-2 border border-gray-300 rounded-lg">
                            Zavřít
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
