import React from 'react'
import zoe from "../assets/zoe.png"

const Navbar = () => {
  return (
    <div className='px-4 py-2 bg-gray-50 shadow-lg shadow-gray-200 lg:shadow-none'>
      <a href='/'><img src={zoe} alt="" /></a>
    </div>
  )
}

export default Navbar