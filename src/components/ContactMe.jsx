import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const ContactMe = () => {
    return (
        <div id='contact' className='flex flex-col gap-3 dark:text-white items-center'>
            <div className="flex flex-col items-center">
                <h3 className="text-sm font-light md:text-lg">Get in Touch</h3>
                <h1 className="text-lg font-bold md:text-2xl dark:text-green">Contact Me</h1>
            </div>
            <div className='flex flex-wrap gap-4 text-lg font-light lg:text-2xl'>
                <a className='flex items-center gap-2 dark:hover:text-purple' href="mailto:ankitammanagi@gmail.com"><IoMdMail /><h1>Gmail</h1></a>
                <a className='flex items-center gap-2 dark:hover:text-purple' href="https://www.linkedin.com/in/ankit-ammanagi-707b40264/"><FaLinkedin /><h1>LinkedIn</h1></a>
            </div>

        </div>
    )
}

export default ContactMe
