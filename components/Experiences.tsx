import React from "react";
import {IoLogoJavascript, IoLogoCss3, IoLogoPython, IoLogoHtml5} from 'react-icons/io5';
import { FaPhp } from 'react-icons/fa6';
import { FaGitAlt } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";




const Experiences = () => {
    return (
        <section>
            <div className="grid grid-cols-1  text-white 2xl:grid-cols-3 2xl:items-center">
                <div className="information-text text-center order-1 md:mx-40 2xl:text-2xl 2xl:col-span-2 2xl:mx-0">
                <blockquote className="citat text-lg pb-0.5 text-transform: capitalize 2xl:text-left">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</blockquote>
                <h2 className="text-3xl pb-0.5 font-extrabold 2xl:text-left">Skills & Experience</h2>
                <p className="text-xl pb-7 2xl:text-left">The main area of expertise is front end development (client side of the web).
                HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts.</p>
                <p className="text-xl 2xl:text-left">Visit my <a href="odkaz-na-vas-linkedin" target="_blank" className="text-yellow-500">Linkedin</a> for more details.</p>
                </div>
            <div className="logos grid grid-cols-2 pt-5 order-2 md:grid-cols-7 2xl:grid-cols-2 2xl:m-10">
                <div className="p-2 flex flex-col items-center">
                    <IoLogoJavascript size={70} />
                    <h3 text-center>JavaScript</h3></div>
                <div className="p-2 flex flex-col items-center">
                    <IoLogoCss3 size={70} />
                    <h3 text-center>CSS3</h3>
                </div>
                <div className="p-2 flex flex-col items-center">
                    <FaPhp size={70} />
                    <h3 text-center>PHP</h3>
                </div>
                <div className="p-2 flex flex-col items-center">
                    <IoLogoPython size={70} />
                    <h3 text-center>Python</h3>
                </div>
                <div className="p-2 flex flex-col items-center">
                    <IoLogoHtml5 size={70} />
                    <h3 text-center>HTML5</h3>
                </div>
                <div className="p-2 flex flex-col items-center">
                    <FaGitAlt size={70} />
                    <h3 text-center>GitHub</h3>
                </div>
                <div className="p-2 flex flex-col items-center">
                    <DiVisualstudio size={70} />
                    <h3 text-center>Visual Studio</h3>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;