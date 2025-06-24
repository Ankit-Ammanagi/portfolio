import { PiSealCheckFill } from "react-icons/pi"

const ExperienceListComp = ({ end,list }) => {
    return (
        <>
            <h1 className="text-lg font-semibold md:text-2xl dark:text-green">{end}</h1>
            <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-7">
                {
                    list && list.length > 0 ?
                        list.map((val, index) =>
                            <li key={index} className="flex items-center gap-4">
                                <div className="text-xl md:text-2xl dark:text-purple">
                                    <PiSealCheckFill />
                                </div>
                                <div>
                                    <h1 className="font-bold md:text-lg">{val.tech}</h1>
                                    <h1 className="font-light text-sm md:text-md">{val.level}</h1>
                                </div>
                            </li>
                        )
                        : null
                }
            </ul>
        </>
    )
}

export default ExperienceListComp
