import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
    return (
        <section className="bg-cover bg-no-repeat bg-[url('/images/dark-black-blue.jpg')] py-20 pt-[150px]">
            <div className="container flex flex-col-reverse items-center lg:flex-row lg:justify-between">
                <div className="lg:w-[700px] text-center lg:text-start">
                    <h1 className="text-white mc-4 text-2xl lg:text-6xl font-medium">Tomas Tomanec.</h1>
                    <h2 className="bg-gradient-to-b from-cyan-300 to-sky-600 text-transparent bg-clip-text mc-2 text-lg lg:text-2xl uppercase pt-1">Designer + Developer</h2>
                    <p className="text-white text-lg mb-6 lg:text-xl pt-2 lg:pt-8">Hi, I&rsquo;m Thomas Tomanec, an IT student crafting websites
                        and smaller intriguing projects. Explore my portfolio
                        showcasing my passion for programming and design.
                        </p>
                </div>
                <div className="alig">
                    <div className="rounded-full animate-logo-anim w-[150px] h-[150px] lg:w-[350px] lg:h-[350px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="rounded-full absolute inset-0 w-full h-full object-cover"
                            width={450}
                            height={450}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection
