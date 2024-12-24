"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ImFileText2 } from "react-icons/im";
import Link from "next/link";
import { getBlogById, updateBlog } from "@/actions/blogs"; // Import serverových akcí

export default function EditBlog() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [createDate, setCreateDate] = useState('');
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const params = useParams();
    const { id } = params as { id: string };

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blog = await getBlogById(id); // Získání blogu
                setName(blog.name || '');
                setContent(blog.content || '');
                setCreateDate(blog.createDate ? new Date(blog.createDate).toLocaleDateString("cs-CZ") : '');
            } catch (error) {
                console.error("Chyba při načítání blogu:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBlog();
        }
    }, [id]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Volání serverové akce pro aktualizaci blogu
            await updateBlog(id, name, content);

            // Po úspěšné úpravě zavoláme fetchBlogs pro okamžité načtení nových dat
            router.push('/dashboard/blog');
            router.refresh(); // Obnovíme data na stránce
        } catch (error) {
            console.error("Chyba při ukládání blogu:", error);
        }
    };

    if (loading) {
        return <div>Načítám...</div>;
    }

    return (
        <div className="min-h-screen py-4 pr-8 pl-4 ml-3">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Upravit blog</h1>
                <div className="flex gap-3">
                    <button
                        form="blog-form"
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded-lg flex gap-2 items-center"
                    >
                        Uložit
                        <ImFileText2 />
                    </button>
                    <Link href="/dashboard/blog">
                        <button className="p-2 border border-blue-500 text-black rounded-lg">
                            Zahodit a zavřít
                        </button>
                    </Link>
                </div>
            </div>
            <form id="blog-form" onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div>
                    <h3 className="text-lg font-medium pb-2">Další informace</h3>
                    <div className="flex gap-5 border border-gray-300 rounded-lg p-2 m-0">
                        <div>
                            <label htmlFor="id" className="block">ID:</label>
                            <input
                                type="text"
                                id="id"
                                value={id}
                                className="p-2 border border-gray-400 bg-gray-300  rounded-lg w-[300px]"
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="CreateAt" className="block">CreateAt:</label>
                            <input
                                type="text"
                                id="CreateAt"
                                value={createDate}
                                className="p-2 border border-gray-400 bg-gray-300  rounded-lg w-[300px]"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-medium pb-2">Důležité informace</h3>
                    <div className="border border-gray-300 rounded-lg p-2">
                        <div>
                            <label htmlFor="title" className="block">Title: *</label>
                            <input
                                type="text"
                                name="title"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="block">Obsah blogu: *</label>
                            <textarea
                                name="content"
                                rows={10}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg w-full"
                                required
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

