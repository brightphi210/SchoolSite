import React from 'react'
import logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <div className='flex z-50 py-5 2xl:px-20 px-5  bg-white shadow-md items-center backdrop-filter backdrop-blur-3xl bg-opacity-80'>
        <div>
            <img src={logo} alt="" width={100} className='2xl:block hidden'/>
            <img src={logo} alt="" width={50} className='block 2xl:hidden'/>
        </div>


        <ul className='flex ml-auto 2lx:gap-8 gap-4 text-xs '>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Gallery</li>
            <li className='cursor-pointer'>Services</li>
        </ul>

    </div>
  )
}

export default Navbar