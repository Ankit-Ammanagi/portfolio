import { LiaCertificateSolid } from "react-icons/lia"
import { PiCertificate } from "react-icons/pi"

const AboutMe = () => {
    return (
        <div id="about" className='w-full px-10 flex flex-col gap-3 md:gap-10 md:px-20'>
            <div className="flex flex-col items-center">
                <h3 className="text-sm font-light md:text-lg text-white">Get To Know More</h3>
                <h1 className="text-lg font-bold md:text-2xl text-green">About Me</h1>
            </div>
            <div className="w-full flex flex-col sm:justify-evenly items-center gap-5 sm:flex-row">
                <div className="w-[60%] sm:w-1/2 md:w-[25%] overflow-hidden rounded-2xl">
                    <img className="w-full object-cover object-center" src="src/assets/developer.avif" alt="about me" />
                </div>
                <div className="flex flex-col gap-5 sm:w-1/2 md:gap-7 dark:text-white">
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <div className="sm:w-1/2 border rounded-2xl p-2 flex flex-col text-center items-center">
                            <div className="text-2xl dark:text-purple"><PiCertificate /></div>
                            <h1 className="font-bold ">Experience</h1>
                            <div>Full Stack Web Development</div>
                        </div>
                        <div className="sm:w-1/2 border rounded-2xl p-2 flex flex-col text-center items-center">
                            <div className="text-2xl dark:text-purple"><LiaCertificateSolid /></div>
                            <h1 className="font-bold ">Education</h1>
                            <div>B.E | Computer Science and Engineering</div>
                        </div>
                    </div>
                    <div className="font-light">
                        Aspiring Frontend Developer with a solid foundation in JavaScript, React.js, and Tailwind CSS.
                        Passionate about creating responsive, user-friendly web apps. Eager to contribute to innovative
                        projects and grow into a full-stack role.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
