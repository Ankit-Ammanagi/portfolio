import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Sphere from "./Sphere";

const Hero = () => {
    const btnRef = useRef(null);
    const textRef = useRef(null);

    return (
        <div className='w-full flex flex-col gap-3 justify-evenly items-center sm:gap-5 sm:flex-row px-4 sm:px-10'>
            <div className='w-[70%] sm:w-[50%] lg:w-[40%] xl:w-[30%] aspect-square'>
                <Sphere/>
            </div>
            <div className="dark:text-white flex flex-col gap-3 sm:gap-5 items-center text-center sm:items-start">
                <div className="flex flex-col gap-1 sm:gap-4">
                    <h3 className="text-lg sm:text-xl">Hello, I'm</h3>
                    <h1 className="text-xl font-bold sm:text-2xl dark:text-green">Ankit Ammanagi</h1>
                    <h2 className="text-2xl sm:text-3xl">Full Stack</h2>
                    <h2 className="text-stroke-orange text-2xl font-bold text-transparent sm:text-3xl">Web Developer.</h2>
                </div>
                <div className="flex gap-2.5 justify-between items-center font-bold">
                    <a href="/Intern_Ankit_Ammanagi.pdf" target="_blank" className="border rounded-4xl pl-5 pr-2 py-2.5 transform duration-900 cursor-pointer flex items-center gap-1 overflow-hidden relative"><span ref={textRef} className="relative z-1 text-white">Resume</span> <div ref={btnRef} className="w-3 h-3 rounded-full dark:bg-purple"></div></a>
                    <a href="#contact" className="border rounded-4xl px-5 py-2.5 transform duration-900 cursor-pointer hover:text-black hover:bg-white dark:text-black dark:bg-green dark:hover:text-white dark:hover:bg-primary">Contact Info</a>
                </div>
                <div className="dark:text-white text-5xl flex gap-10 mt-3 justify-center items-center text-center w-full">
                    <a className="hover:text-green" href="https://www.linkedin.com/in/ankit-ammanagi-707b40264/"><FaLinkedin /></a>
                    <a className="hover:text-purple" href="https://github.com/Ankit-Ammanagi"><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}

export default Hero;