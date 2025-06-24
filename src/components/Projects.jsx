import ProjectShowcaseComponent from './ProjectShowcaseComponent'

const Projects = () => {
    return (
        <div id='projects' className='dark:text-white flex flex-col gap-3 sm:gap-5 xl:gap-9 px-5 sm:px-10'>
            <div className="flex flex-col items-center">
                <h3 className="text-sm font-light md:text-lg">Browse My Recent</h3>
                <h1 className="text-lg font-bold md:text-2xl dark:text-green">Projects</h1>
            </div>
            <div className='flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-3'>
                <div className='border p-7 px-10 rounded-2xl flex flex-col gap-2 items-center'>
                    <ProjectShowcaseComponent imgUrl={'src/assets/groceryShopping.jpg'} ProjTitle={'Grocery Shopping App'} GithubUrl={'https://github.com/Ankit-Ammanagi/Grocery-shopping-application'} />
                </div>
                <div className='border p-7 px-10 rounded-2xl flex flex-col gap-2 items-center'>
                    <ProjectShowcaseComponent imgUrl={'src/assets/groceryShopping.jpg'} ProjTitle={'Grocery Shopping App'} GithubUrl={'https://github.com/Ankit-Ammanagi/Grocery-shopping-application'} />
                </div>
                <div className='border p-7 px-10 rounded-2xl flex flex-col gap-2 items-center md:col-span-2 xl:col-span-1'>
                    <ProjectShowcaseComponent imgUrl={'src/assets/groceryShopping.jpg'} ProjTitle={'Grocery Shopping App'} GithubUrl={'https://github.com/Ankit-Ammanagi/Grocery-shopping-application'} />
                </div>
            </div>
        </div>
    )
}

export default Projects
