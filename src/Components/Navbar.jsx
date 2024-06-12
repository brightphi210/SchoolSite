import React from 'react'
import logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <div className='flex z-50 py-5 px-20  bg-white shadow-md items-center backdrop-filter backdrop-blur-3xl bg-opacity-80'>
        <div>
            <img src={logo} alt="" width={100}/>
        </div>


        <ul className='flex ml-auto gap-8 text-xs'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Gallery</li>
        </ul>
    </div>
  )
}

export default Navbar