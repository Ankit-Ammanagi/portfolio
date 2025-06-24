import React from 'react'

const ProjectShowcaseComponent = ({ imgUrl, ProjTitle, GithubUrl }) => {
    return (
        <>
            <div className='rounded-2xl overflow-hidden w-full'>
                <img className='w-full object-cover object-center' src={imgUrl} alt="project" />
            </div>
            <h1>{ProjTitle}</h1>
            <a className='border w-fit py-2 px-4 rounded-3xl font-bold dark:hover:bg-purple dark:hover:text-black' href={GithubUrl}><button className='cursor-pointer'>Github</button></a>
        </>
    )
}

export default ProjectShowcaseComponent
