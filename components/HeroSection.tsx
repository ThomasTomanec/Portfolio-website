import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center order-2 lg:order-1">
                    <div className='flex justify-between'>
                        <div>
                        <h1 className="text-white mc-4 text-2xl lg:text-6xl font-medium">Tomas Tomanec.</h1>
                        <h2 className="text-blue-300 mc-2 text-lg lg:text-2xl uppercase pt-1">Designer + Developer</h2>
                        </div>
                        <div className="rounded-full animate-logo-anim w-[75px] h-[75px] relative md:hidden">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="rounded-full absolute inset-0 w-full h-full object-cover"
                            width={450}
                            height={450}
                        />
                    </div>
                    </div>
                    <p className="text-white text-lg mb-6 lg:text-xl pt-2 lg:pt-8">Hi, I&rsquo;m Thomas Tomanec, an IT student crafting websites
                        and smaller intriguing projects. Explore my portfolio
                        showcasing my passion for programming and design.
                        </p>
                </div>
                <div className="col-span-5 place-self-center mt-4 order-1 lg:order-2 lg:mt-0">
                    <div className="rounded-full animate-logo-anim w-[150px] h-[150px] lg:w-[350px] lg:h-[350px] relative hidden md:block">
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
