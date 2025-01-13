"use client";
import React from 'react';

type Blog = {
    id: string;
    name: string;
    content: string;
    createDate: Date;
};

type Props = {
    blogs: Blog[];
};

export default function Blogs({ blogs }: Props) {
    return (
        <div>
                <div className="flex flex-col gap-10 container py-20">
                {blogs.map((blog) => (
                    <div className="card lg:w-[800px] flex flex-col gap-[5px]" key={blog.id}>
                        <h3 className="text-white text-[18px] font-semibold">{blog.name}</h3>
                        <p className="text-[14px] bg-gradient-to-b from-cyan-300 to-sky-600 text-transparent bg-clip-text">{new Date(blog.createDate).toLocaleDateString('cs-CZ')}</p>
                        <p className="text-gray-400 text-[14px]">{blog.content}</p>
                    </div>
                ))}
                </div>
        </div>
    );
}
