import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

import a from '../../Images/1.jpg'
import b from '../../Images/2.jpg'
import c from '../../Images/3.jpg'
import d from '../../Images/4.jpg'
import e from '../../Images/5.jpg'

const Gallery = () => {
  return (
    <div>   
        <Navbar />
        <div className='bg-black h-[15rem] text-white 2xl:px-[16rem] xl:px-[10rem] lg:px-[10rem] pt-32 px-5 p-10'>
            <h2 className='text-4xl pb-5 border-b w-fit border-b-orange-400'>Gallery</h2> 
        </div>

        <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 py-20 2xl:px-[16rem] xl:px-[10rem] lg:px-[10rem] px-5'>
                    <div className='bg-black 2xl:rounded-2xl rounded-xl' data-aos="fade-up" data-aos-duration="1000">
                        <img src={a} alt="" className='rounded-xl hover:opacity-85 cursor-pointer'/>
                    </div>

                    <div className='bg-black 2xl:rounded-2xl rounded-xl' data-aos="fade-up" data-aos-duration="1000">
                        <img src={b} alt="" className='rounded-xl hover:opacity-85 cursor-pointer'/>
                    </div>


                    <div className='bg-black 2xl:rounded-2xl rounded-xl' data-aos="fade-up" data-aos-duration="1000">
                        <img src={c} alt="" className='rounded-xl hover:opacity-85 cursor-pointer'/>
                    </div>


                    <div className='bg-black 2xl:rounded-2xl rounded-xl' data-aos="fade-up" data-aos-duration="1000">
                        <img src={d} alt="" className='rounded-xl hover:opacity-85 cursor-pointer'/>
                    </div>


                    <div className='bg-black 2xl:rounded-2xl rounded-xl' data-aos="fade-up" data-aos-duration="1000">
                        <img src={e} alt="" className='rounded-xl hover:opacity-85 cursor-pointer'/>
                    </div>
                </div>
        <Footer />
    </div>
  )
}

export default Gallery
