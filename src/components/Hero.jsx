import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='w-full flex flex-col gap-3 justify-evenly items-center sm:gap-5 sm:flex-row px-4 sm:px-10'>
            <div className='w-[70%] sm:w-[50%] lg:w-[40%] xl:w-[30%] h-fit border-8 bg-green rounded-[100%] border-purple overflow-hidden'>
                <img className="w-full object-cover object-center" src="src/assets/hero.webp" alt="hero-image" />
            </div>
            <div className="dark:text-white flex flex-col gap-3 sm:gap-5 items-center text-center sm:items-start">
                <div className="flex flex-col gap-1 sm:gap-4">
                    <h3 className="text-lg sm:text-xl">Hello, I'm</h3>
                    <h1 className="text-xl font-bold sm:text-2xl dark:text-green">Ankit Ammanagi</h1>
                    <h2 className="text-2xl sm:text-3xl">Full Stack</h2>
                    <h2 className="text-stroke-orange text-2xl font-bold text-transparent sm:text-3xl">Web Developer.</h2>
                </div>
                <div className="flex gap-2.5 justify-between items-center font-bold">
                    <button className="border rounded-4xl px-5 py-2.5 transform duration-900 cursor-pointer dark:text-white dark:hover:bg-purple dark:hover:text-black">Download CV</button>
                    <a href="#contact"><button className="border rounded-4xl px-5 py-2.5 transform duration-900 cursor-pointer hover:text-black hover:bg-white dark:text-black dark:bg-green dark:hover:text-white dark:hover:bg-primary">Contact Info</button></a>
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