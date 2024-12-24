import React from 'react';
import Blogs from "@/components/blogs";
import { db } from '@/lib/db';

export default async function blog() {
    const blogs = await db.blog.findMany();

    return (
        <div className="container flex flex-col flex-wrap content-center">
            <div className="w-[700px] py-10">
                <h3 className="text-[24px] bg-gradient-to-b from-cyan-300 to-sky-600 text-transparent bg-clip-text">Blog</h3>
                <h2 className="text-[42px] text-white font-medium">Here, I write my blogs.</h2>
                <p className="text-[14px] text-gray-400">On my portfolio, I write blogs where I share my experiences, ideas, and tech news. Each post showcases my skills in writing, programming, and design.</p>
            </div>

            <Blogs blogs={blogs}/>
        </div>
    );
}