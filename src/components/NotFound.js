import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFound from "../assets/Curious-rafiki.png"

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-start justify-center w-4/5 m-auto text-secondaryText gap-4 pt-4 lg:flex-row lg:w-full'> 
            <div className='lg:flex lg:flex-col'>
            <span className='font-bold text-3xl text-left lg:text-6xl'>Oops...</span>
            <img className='lg:w-9/12' src={notFound} alt="" />
            </div>
            <div className='lg:flex lg:flex-col lg:w-full lg:gap-11 lg:pt-24'>
            <p className='font-bold text-2xl text-center'>No available Agents based on your income. <span className='text-base font-normal'> <br/> Please try a different income value</span></p>
            <button onClick={()=> navigate("/")} className='cursor-pointer flex justify-center items-center relative bg-primary w-full rounded py-2 font-bold text-white lg:w-full'>Go back</button>
            </div>
        </div>
    )
}

export default NotFound