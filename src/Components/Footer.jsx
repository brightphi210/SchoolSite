import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      
      <div className='flex 2xl:flex-row xl:px-[10rem] lg:px-[10rem] flex-col  2xl:px-[16rem] px-5 gap-[5rem] p-20 bg-black text-white'>
            <div className='w-full'>
                <h2 className='pb-10'>About Us</h2>
                <p className='leading-loose'>
                    Overseas High School is a nursery and primary school that prides itself on 
                    offering superior, application-based education. Its mission is to produce 
                    top-performing ‘smart’ students – students who are knowledgeable, innovative, 
                    forward thinking and morally sound. At OHS, we do not just educate students, 
                    we mold them to become tomorrow’s pacesetters.
                </p>
            </div>


            <div className='w-full'>
                <h2 className='pb-10'>POPULAR LINKS</h2>

                <Link to={'/'}>
                    <p className='pb-5'>Home</p>
                </Link>

                <Link to={'/about'}>
                    <p className='pb-5'>About</p>
                </Link>

                <Link to={'/events'}>
                    <p className='pb-5'>Events</p>
                </Link>

            </div>


            <div className='w-full'>
                <h2 className='pb-10'>Contact Us</h2>
                <p className='pb-5'>
                    Lagos: 8/10, Olawole Daodu Street, Ifako-Gbagada.
                    Ogun: Km 42, Lagos-Ibadan Expressway Opposite Deeper Life Conference Centre, Ogunrun-Ori.
                </p>
                <p className='pb-5'>+234 909 663 0728, +234 906 292 3912, +234 811 393 2810.</p>
                <p className='pb-5'>info@emeraldschools.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
