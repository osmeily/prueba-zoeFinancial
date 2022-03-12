import React, { useContext } from 'react'
import { Matches } from '../Context'
import userDefault from "../assets/user-default.png"

const Card = ({agent}) => {

    const {hiddenAgents, setHiddenAgents} = useContext(Matches)

    const clickedAgent = () => {
        setHiddenAgents([...hiddenAgents, agent.id])
    } 

    return (
        <section onClick={clickedAgent} className='shadow-[2px_5px_8px_4px_rgba(0,0,0,0.1)] w-full m-auto py-2 flex gap-2 justify-evenly rounded-xl text-secondaryText cursor-pointer hover:scale-105 lg:flex-col lg:items-center lg:gap-4 lg:max-w-max lg:py-0 lg:pt-8 lg:justify-center lg:m-auto'>
            <div className='rounded-full overflow-hidden w-20 aspect-square lg:w-28'>
                <img className='w-full object-cover h-full' src={agent.avatar === "" ? userDefault : agent.avatar} alt="" />
            </div>
            <div className='flex flex-col lg:justify-center lg:items-center lg:gap-2 lg:w-72'>
                <span className='font-bold text-xl'>{agent.name}</span>
                <span>ID: {agent.id}</span>
                <span className='text-sm lg:bg-grayArea lg:py-4 lg:px-14 lg:w-full lg:text-center'>Income: <span className='font-bold text-base'>${agent.income}</span></span>
            </div>
        </section>
    )
}

export default Card