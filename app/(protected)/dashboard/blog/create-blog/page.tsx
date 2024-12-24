"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ImFileText2 } from "react-icons/im";
import Link from 'next/link';
import { createBlog } from "@/actions/blogs";

export default function CreateBlog() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        try {
            // Zavolání serverové akce
            await createBlog(formData);

            // Po úspěšném vytvoření přesměrování a refresh stránky
            router.push('/dashboard/blog');
            router.refresh(); // Obnovíme data na stránce
        } catch (error) {
            console.error('Chyba při vytváření blogu:', error);
            alert('Něco se pokazilo při ukládání blogu. Zkuste to znovu.');
        }
    };

    return (
        <div className="min-h-screen py-4 pr-8 pl-4 ml-3">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Přidat nový blog</h1>
                <div className="flex gap-3">
                    <button
                        form="blog-form"
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded-lg flex gap-2 items-center">
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
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 border border-gray-400 bg-gray-300  rounded-lg w-[300px]"
                                required
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="CreateAt" className="block">CreateAt:</label>
                            <input
                                type="text"
                                id="CreateAt"
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 border border-gray-400 bg-gray-300 rounded-lg w-[300px]"
                                required
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
