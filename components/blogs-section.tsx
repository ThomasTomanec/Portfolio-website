"use client";
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';



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
        <div className="bg-cover bg-bottom bg-no-repeat bg-[url('/images/footer-bg.png')] py-[30px] md:py-[50px] flex items-center">
            <div className="container">
                <div className=" py-10 flex flex-col lg:flex-row justify-between">
                    <div className="lg:w-[700px]">
                        <h3 className="text-[24px] bg-gradient-to-b from-cyan-300 to-sky-600 text-transparent bg-clip-text">Blog</h3>
                        <h2 className="text-[42px] text-white font-medium">Here, I write my blogs.</h2>
                        <p className="text-[14px] text-gray-400">On my portfolio, I write blogs where I share my
                            experiences,
                            ideas, and tech news. Each post showcases my skills in writing, programming, and design.</p>
                    </div>
                    <div className="self-center lg:self-start pt-10 hidden lg:block">
                        <Link href="/page/blog">
                            <button
                                className="flex lg:mt-36 items-center gap-2 pl-4 pr-2 py-2 rounded-3xl bg-gradient-to-b from-cyan-300 to-sky-600">
                                <p>Go to blog page</p>
                                <FiArrowUpRight size={32} className="p-[6px] text-white bg-black rounded-full "/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 justify-start">
                    {blogs.map((blog) => (
                        <div className="card md:w-[450px] flex flex-col gap-[5px]" key={blog.id}>
                            <h3 className="text-white text-[18px] font-semibold">{blog.name}</h3>
                            <p className="text-[14px] bg-gradient-to-b from-cyan-300 to-sky-600 text-transparent bg-clip-text">{new Date(blog.createDate).toLocaleDateString('cs-CZ')}</p>
                            <p className="text-gray-400 text-[14px]">{blog.content}</p>
                        </div>
                    ))}
                </div>
                <div className="self-center justify-center lg:self-start pt-10 flex lg:hidden">
                    <Link href="/page/blog">
                        <button
                            className="flex lg:mt-36 items-center gap-2 pl-4 pr-2 py-2 rounded-3xl bg-gradient-to-b from-cyan-300 to-sky-600">
                            <p>Go to blog page</p>
                            <FiArrowUpRight size={32} className="p-[6px] text-white bg-black rounded-full "/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}