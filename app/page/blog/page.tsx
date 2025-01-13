import React from 'react';
import Blogs from "@/components/blogs";
import { db } from '@/lib/db';
import HeroSectionBlogs from "@/components/HeroSectionBlogs";

export default async function blog() {
    const blogs = await db.blog.findMany();

    return (
        <main
            className="mainSite relative z-10 mt-[-230px] sm:mt-[-250px] lg:mt-[-100px] flex min-h-screen flex-col bg-midnight-black">
            <div className="components">
                <div className="componentHeroSections col-span-1">
                    <div>
                        <HeroSectionBlogs/>
                    </div>
                    <div>
                        <Blogs blogs={blogs}/>
                    </div>
                </div>
            </div>
        </main>
            );
            }