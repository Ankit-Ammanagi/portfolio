import React from 'react'
import ExperienceListComp from './ExperienceListComp'

const Experience = () => {
    return (
        <div id='experience' className='w-full px-5 dark:text-white flex flex-col gap-5 md:gap-10 md:px-20'>
            <div className="flex flex-col items-center">
                <h3 className="text-sm font-light md:text-lg">Explore My</h3>
                <h1 className="text-lg font-bold md:text-2xl dark:text-green">Experience</h1>
            </div>
            <div className='flex flex-col items-center gap-8 sm:grid sm:grid-cols-2 sm:items-start place-items-center'>
                <div className='flex flex-col items-center gap-2 md:gap-6 border w-fit rounded-2xl p-4 sm:w-full sm:row-span-2 md:p-8'>
                    <ExperienceListComp end={"Frontend Development"} list={[{ tech: 'HTML5', level: 'Experienced' }, { tech: 'CSS3', level: 'Experienced' }, { tech: 'SCSS', level: 'Experienced' }, { tech: 'Tailwind CSS', level: 'Basic' }, { tech: 'Javascript', level: 'Intermediate' }, { tech: 'React JS', level: 'Intermediate' }, { tech: 'Redux', level: 'Basic' }]} />
                </div>
                <div className='flex flex-col items-center gap-2 md:gap-6 border w-fit rounded-2xl p-4 sm:w-full md:p-8'>
                    <ExperienceListComp end={"Backend Development"} list={[{ tech: 'Node JS', level: 'Intermediate' }, { tech: 'Express JS', level: 'Intermediate' }, { tech: 'Mongoose', level: 'Intermediate' },{ tech: 'SQL', level: 'Basic' }]} />
                </div>
                <div className='flex flex-col items-center gap-2 md:gap-6 border w-fit rounded-2xl p-4 sm:w-full md:p-8'>
                    <ExperienceListComp end={"Tools and Platforms"} list={[{ tech: 'Git', level: 'Intermediate' }, { tech: 'Github', level: 'Intermediate' }, { tech: 'VSCode', level: 'Experienced' }]} />
                </div>
            </div>
        </div>
    )
}

export default Experience
