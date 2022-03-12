import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ShowBtn = ({setQuantity, quantity, agentsNumber}) => {

  const handleShowMore = () => {
    if(quantity + 3 <= agentsNumber ){
      setQuantity(quantity+3)
    } else if(quantity + 3 > agentsNumber)
      setQuantity(agentsNumber)

  }

  const handleShowLess = () => {
    if(quantity - 3 >= 3 ){
      setQuantity(quantity-3)
    } else if(quantity - 3 < 3) {
      setQuantity(3)
      
    }
  }

  return (

    <div className='flex py-4  m-auto justify-between items-center w-full lg:justify-end lg:gap-4 lg:w-full'>
        <div>
        <button onClick={handleShowLess} className='font-bold flex items-center gap-2'>Show less
        <AiOutlineMinus className='text-sm'/>
        </button>
        </div>
        <div>
        <button onClick={handleShowMore} className='text-primary font-bold flex items-center gap-2'>
        Show more
        <AiOutlinePlus className='text-sm'/>
        </button>
        </div>
    </div>
  )
}

export default ShowBtn