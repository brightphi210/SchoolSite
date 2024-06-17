import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex fixed w-full z-50 py-5 2xl:px-[16rem] xl:px-[10rem] lg:px-[10rem] px-5  bg-white shadow-md items-center backdrop-filter backdrop-blur-3xl bg-opacity-80'>
        <div>
          <Link to={'/'}>
            <img src={logo} alt="" width={100} className='2xl:block hidden'/>
          </Link>

          <Link to={'/'}>
            <img src={logo} alt="" width={50} className='block 2xl:hidden'/>
          </Link>
        </div>


        <ul className='flex ml-auto 2lx:gap-8 gap-4 text-xs '>
          <Link to={'/about'}>
            <li className='cursor-pointer text-sm 2xl:text-lg font-semibold'>About</li>
          </Link>
          <li className='cursor-pointer text-sm 2xl:text-lg font-semibold'>Gallery</li>
          <li className='cursor-pointer text-sm 2xl:text-lg font-semibold'>Events</li>
        </ul>

    </div>
  )
}

export default Navbar