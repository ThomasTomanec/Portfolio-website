"use client";
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";


type Blog = {
    id: string;
    name: string;
    content: string;
    createDate: Date;
};

type Props = {
    blogs: Blog[];
};

export default function BlogsSection({ blogs }: Props) {
    return (
        <div className="container ">
            <div className=" py-10 flex justify-between items-end">
                <div className="w-[700px]">
                <h3 className="text-[24px] bg-gradient-to-b from-cyan-300 to-sky-600 text-transparent bg-clip-text">Blog</h3>
                <h2 className="text-[42px] text-black font-medium">Here, I write my blogs.</h2>
                <p className="text-[14px] text-gray-400">On my portfolio, I write blogs where I share my experiences,
                    ideas, and tech news. Each post showcases my skills in writing, programming, and design.</p>
                </div>
                <div>
                    <button className="flex items-center gap-2 px-5 py-2 rounded-3xl bg-gradient-to-b from-cyan-300 to-sky-600">
                        <p>go to blog</p>
                        <FiArrowUpRight size={32} className="p-[6px] text-white bg-black rounded-full "/>
                    </button>
                </div>
            </div>

            <div className="flex gap-10 justify-between">
                {blogs.map((blog) => (
                    <div className="card w-[450px] flex flex-col gap-[5px]" key={blog.id}>
                        <h3 className="text-black text-[18px] font-semibold">{blog.name}</h3>
                        <p className="text-[14px] bg-gradient-to-b from-cyan-300 to-sky-600 text-transparent bg-clip-text">{new Date(blog.createDate).toLocaleDateString('cs-CZ')}</p>
                        <p className="text-gray-400 text-[14px]">{blog.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}