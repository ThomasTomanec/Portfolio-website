import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { FaPen } from "react-icons/fa";
import { BiSolidTrashAlt } from "react-icons/bi";
import { deleteBlog } from "@/actions/blogs";

type Blog = {
    id: string;
    name: string;
    content: string;
};

export default async function BlogPage() {
    const blogs = await db.blog.findMany();

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

            <table className="min-w-full mt-4">
                <thead>
                <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 w-[2%]">ID</th>
                    <th className="px-4 py-2 ">Title</th>
                    <th className="px-4 py-2">CreateAt</th>
                    <th className="px-4 py-2">Content</th>
                    <th className="px-4 py-2 w-[10%]">Action</th>
                </tr>
                </thead>
                <tbody>
                {blogs.map((blog) => (
                    <tr key={blog.id}>
                        <td className="border-x border-dashed border-gray-300 px-4">{blog.id}</td>
                        <td className="border-x border-dashed border-gray-300 px-4">{blog.name}</td>
                        <td className="border-x border-dashed border-gray-300 px-4">{new Date(blog.createDate).toLocaleDateString('cs-CZ')}</td>
                        <td className="border-x border-dashed border-gray-300 px-4">{blog.content}</td>
                        <td className="flex border-x border-dashed px-4">
                            <button className="p-2 m-1 font-bold border border-gray-300 rounded-lg">
                                <FaPen />
                            </button>
                            <form action={deleteBlog} method="post">
                                <input type="hidden" name="id" value={blog.id} />
                                <button
                                    type="submit"
                                    className="p-2 font-bold border border-gray-300 rounded-lg m-1"
                                >
                                    <BiSolidTrashAlt />
                                </button>
                            </form>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
