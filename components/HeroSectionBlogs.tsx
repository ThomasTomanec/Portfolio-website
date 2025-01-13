import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
    return (
    <section className="bg-cover bg-no-repeat bg-[url('/images/dark-black-blue.jpg')] py-20 pt-[230px] lg:pt-[150px]">
        <div className="flex flex-col-reverse container items-center lg:flex-row lg:justify-between">
            <div className="lg:w-[700px] text-center lg:text-start">
                <h3 className="text-[24px] bg-gradient-to-b from-cyan-300 to-sky-600 text-transparent bg-clip-text">Blog</h3>
                <h2 className="text-[42px] text-white font-medium">Here, I write my blogs.</h2>
                <p className="text-[14px] text-gray-400">On my portfolio, I write blogs where I share my experiences,
                    ideas, and
                    tech news. Each post showcases my skills in writing, programming, and design.</p>
            </div>
        </div>
        </section>
    );
};

export default HeroSection
