import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

import a from '../../Images/1.jpg'
import b from '../../Images/2.jpg'
import c from '../../Images/3.jpg'
import d from '../../Images/4.jpg'
import e from '../../Images/5.jpg'

const Events = () => {

    
  return (
    <div>
      <Navbar />

      <div>

        <div className='bg-black h-[15rem] text-white 2xl:px-[16rem] xl:px-[10rem] lg:px-[10rem] pt-32 px-5 p-10'>
            <h2 className='text-4xl pb-5 border-b w-fit border-b-orange-400'>Events</h2> 
        </div>
        <div className='grid 2xl:grid-cols-3 flex-col 2xl:px-[16rem] xl:px-[10rem] lg:px-[10rem] px-5 gap-10 py-20'>
            <div className='bg-neutral-100 rounded-lg' >
                <div className='w-full rounded-lg'>
                    <img src={a} alt="" className='rounded-lg'/>
                </div>

                <div className='p-5 text-black'>
                    <h2 className='text-xl font-semibold'>End of year event</h2>
                    <p>October 2023</p>
                </div>
            </div>

            <div className='bg-neutral-100 rounded-lg' >
                <div className='w-full rounded-lg'>
                    <img src={d} alt="" className='rounded-lg'/>
                </div>

                <div className='p-5 text-black'>
                    <h2 className='text-xl font-semibold'>End of year event</h2>
                    <p>October 2023</p>
                </div>
            </div>


            <div className='bg-neutral-100 rounded-lg' >
                <div className='w-full rounded-lg'>
                    <img src={b} alt="" className='rounded-lg'/>
                </div>

                <div className='p-5 text-black'>
                    <h2 className='text-xl font-semibold'>End of year event</h2>
                    <p>October 2023</p>
                </div>
            </div>


            <div className='bg-neutral-100 rounded-lg' >
                <div className='w-full rounded-lg'>
                    <img src={c} alt="" className='rounded-lg'/>
                </div>

                <div className='p-5 text-black'>
                    <h2 className='text-xl font-semibold'>End of year event</h2>
                    <p>October 2023</p>
                </div>
            </div>


            <div className='bg-neutral-100 rounded-lg' >
                <div className='w-full rounded-lg'>
                    <img src={e} alt="" className='rounded-lg'/>
                </div>

                <div className='p-5 text-black'>
                    <h2 className='text-xl font-semibold'>End of year event</h2>
                    <p>October 2023</p>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Events
