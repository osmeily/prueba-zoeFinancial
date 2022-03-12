import React, { useState } from 'react'
import userImg from "../assets/userVector.png"
import { MdAttachMoney, MdArrowForward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { AgentState } from '../Context';

const Landing = ({ data }) => {

    const [inputText, setInputText] = useState("")
    const {dispatch} = AgentState()

    const handleInput = (e) => {
        setInputText(e.target.value)
    }



    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const integer = parseInt(inputText)
        const dataFilter = data.filter((agent) => agent.income > (integer - 10000) && agent.income < (integer + 10000))
        dispatch({
            type: "SET_TEXT",
            payload: dataFilter
        })
        navigate("/match-list")
    }

    

    return (
        <main className='pt-20 flex flex-col gap-4 lg:w-2/5 lg:m-auto'>
            <div className=' p-2 flex flex-col justify-center items-center gap-6 w-5/6 mx-auto text-center'>
                <img src={userImg} alt="" />
                <h1 className='font-bold text-3xl'>Find the best agent for you!</h1>
                <p>Fill the information below to get your matches.</p>
            </div>
            <form action="" onSubmit={(e) => handleOnSubmit(e)} className="flex flex-col justify-center items-center gap-10 w-5/6 mx-auto lg:w-4/6">
                <div className='relative flex flex-col w-full gap-2'>
                    <label className='text-secondaryText text-sm'>Current income</label>
                    <MdAttachMoney className='absolute text-xl bottom-3 text-secondaryText left-1' />
                    <input className='focus:outline-none p-2 border-solid border-2 border-slate-200 w-full rounded pl-6' onChange={handleInput} type="number" required />
                </div>
                <div className='w-full flex justify-end'>
                <button className='cursor-pointer flex justify-center items-center relative bg-primary w-full rounded py-2 font-bold text-white lg:w-1/2' type='submit' disabled={inputText.length !== 5}>Get matches<MdArrowForward className='absolute right-3 text-xl '/> </button>
                </div>
            </form>
        </main>
    )
}

export default Landing