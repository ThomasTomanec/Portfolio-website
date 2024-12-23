"use client";
import React from 'react';
import { FaPen } from "react-icons/fa";
import { BiSolidTrashAlt } from "react-icons/bi";
import Link from 'next/link';

type Blog = {
    id: string;
    name: string;
    content: string;
    createDate: Date;
};

type Props = {
    blogs: Blog[];
    onDelete: (id: string) => void;
};

export default function BlogTable({ blogs, onDelete }: Props) {
    return (
        <div>
            <table className="min-w-full mt-4">
                <thead>
                <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 w-[2%]">ID</th>
                    <th className="px-4 py-2">Title</th>
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
                        <td className="border-x border-dashed border-gray-300 px-4">
                            {new Date(blog.createDate).toLocaleDateString('cs-CZ')}
                        </td>
                        <td className="border-x border-dashed border-gray-300 px-4">{blog.content}</td>
                        <td className="flex border-x border-dashed px-4">
                            <Link href={`/dashboard/blog/edit-blog/${blog.id}`}>
                                <button className="p-2 m-1 font-bold border border-gray-300 rounded-lg">
                                    <FaPen />
                                </button>
                            </Link>
                            <button
                                onClick={() => onDelete(blog.id)}
                                className="p-2 font-bold border border-gray-300 rounded-lg m-1"
                            >
                                <BiSolidTrashAlt />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
