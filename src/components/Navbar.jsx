import { useState } from "react"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='relative flex justify-between py-8 px-10 dark:text-white sm:px-20 sm:mb-3 md:mb-0'>
            <a href="/"><h1 className='text-2xl font-extrabold cursor-none max-sm:text-lg lg:text-3xl text-green'>Ankit.</h1></a>
            <nav className='flex gap-10 text-lg max-sm:hidden'>
                <a className='dark:hover:text-purple' href="#about">About</a>
                <a className='dark:hover:text-purple' href="#experience">Experience</a>
                <a className='dark:hover:text-purple' href="#projects">Projects</a>
                <a className='dark:hover:text-purple' href="#contact">Contact</a>
            </nav>
            <div className="sm:hidden">
                {
                    navbar ?
                        <nav className="flex absolute top-0 right-0 p-5 dark:bg-primary-dull pt-8 px-10 sm:px-20 gap-4">
                            <div className="flex flex-col gap-2">
                                <a className='dark:hover:text-purple' href="
                                #about">About</a>
                                <a className='dark:hover:text-purple' href="#experience">Experience</a>
                                <a className='dark:hover:text-purple' href="#projects">Projects</a>
                                <a className='dark:hover:text-purple' href="#contact">Contact</a>
                            </div>
                            <div onClick={() => setNavbar(!navbar)} className="text-white text-xl"><RxCross1 /></div>
                        </nav>
                        : <div onClick={() => setNavbar(!navbar)} className="text-white text-2xl"><RxHamburgerMenu /></div>
                }
            </div>
        </div>
    )
}

export default Navbar
