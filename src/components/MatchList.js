import React, { useContext, useEffect } from 'react'
import Cards from './Cards'
import NotFound from './NotFound'

const MatchList = () => {

    const {dataFiltered, setSortBy, inputText} = useContext(Matches)

    const handleOnChange = (value) => {
        setSortBy(value)
    }


    return (
        <div className='w-full m-auto flex flex-col gap-8 lg:w-9/12 lg:p-4'>
            <div className='flex flex-col justify-center items-center gap-2 w-4/5 m-auto pt-14 lg:pt-8'>
                {
                    dataFiltered.length === 0 ?
                    "" : <h2 className='font-bold text-3xl '>Your matches</h2>
                }
                <p className='text-xl'>Your income: <span className='font-bold'>${inputText}</span></p>
            </div>
            
            {
                dataFiltered.length === 0  ?
                <NotFound/>
                :
                <>
                <div className='flex flex-col w-4/5 m-auto text-secondaryText gap-2 lg:w-full'>
                <span className=''>Order agents by</span>
                <select onChange={(e)=> handleOnChange(e.target.value)} name="orderby" className='focus:outline-none p-2 border-solid border-2 border-slate-200 w-full rounded pl-6 bg-white text-gray-500 lg:w-1/5 '>
                    <option className='' value="" defaultChecked >Select...</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="id">ID</option>
                    <option value="high">Income: High first</option>
                    <option value="low">Income: Low first</option>
                </select>
                </div>
                <Cards/>
                </>
            }
        </div>
    )
}

export default MatchList