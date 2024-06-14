import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import imgs from '../../Images/6.jpg'

import a from '../../Images/1.jpg'
import b from '../../Images/2.jpg'
import c from '../../Images/3.jpg'
import d from '../../Images/4.jpg'
import e from '../../Images/5.jpg'



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { GrCertificate } from "react-icons/gr";
import { IoSchoolSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";

const SectionOne = () => {
  return (

    <div>
        <div className='myBg'>
            <div className='isolate flex justify-center items-center h-full'>
                <div>
                    <h2 className='2xl:text-7xl xl:text-3xl lg:text-3xl text-3xl text-center text-white font-bold'>We are Commited <br /> to  Excellence</h2>
                    <p className='text-white font-medium text-center 2xl:text-2xl xl:text-lg lg:text-lg py-5'>We commited to raising champions  and <br /> excellent students globally</p>
                    <div className='2xl:flex flex justify-center items-center mt-3 gap-4'>
                        <button className='2xl:px-10 px-5 py-3 text-xs text-black bg-white rounded-full flex gap-3 items-center'>Gallery <FaArrowRight /></button>
                        <button className='2xl:px-10 px-5 py-3 text-xs text-white bg-yellow-500 rounded-full flex items-center gap-3'>Contact us <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>


        <div className='2xl:px-[16rem] xl:px-[6rem]: lg:px-[5rem] px-5'>

        


        <div className='bg-neutral-50 text-black mt-10 rounded-lg 2xl:p-20 xl:px-10 lg:px-10 px-5'>
                <h2 className='2xl:text-4xl xl:text-2xl lg:text-2xl text-xl'>Our Vision & Mission Statement</h2>
                <div>
                    <p className='2xl:text-xl text-sm text-justify pt-5 leading-loose'>
                        Our vision at OHS is to be ranked among the top ten schools in Nigeria. 
                        Therefore, we strive to set a high academic standard for all levels of 
                        education. Our students are trained to develop the intellectual capacity, 
                        technological skillset, practical skills, and moral foundation that will 
                        prepare them to excel in any field in any part of the world.

                    </p>
                </div>
            </div>


            <div>
                <div className='2xl:flex 2xl:flex-row flex-col items-center gap-10 pt-20'>
                    <div className='w-full rounded-2xl'>
                        <img src={imgs} alt="" className='w-full rounded-2xl'/>
                    </div>

                    <div className='w-full'>
                        <h2 className='2xl:text-4xl text-2xl mb-5 pb-3 border-b-2 border-yellow-500 w-fit '>The School’s Leadership</h2>
                        <p className='2xl:text-lg text-sm leading-relaxed'>
                            OHS is the vision of Dr Godwin Ugwu and his wife Mrs 
                            Benedette Ugwu. After returning to Nigeria, having spent 
                            many years in the UK, they sought to create an educational 
                            system that would produce students who were rounded in knowledge, 
                            skills and ethics. Their passion led them to become founding members 
                            of the highly-acclaimed International Unity School, Delta state. 
                            They are also owners of Over Godwin and Bernadette Smart School, 
                            Rivers state, and Felicia Ugwu Primary School, Enugu state.  
                            With a combined experience of more than three decades teaching 
                            at pre-school to tertiary level, they have the expertise and dedication 
                            required to help their students become the best they can possibly be. 
                            (include joint statement from founders) “xxxxxxxx” <br />
                            •	Dr & Mrs Ugwu.

                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-black text-white my-10 rounded-lg 2xl:p-20 p-5'>
                <h2 className='text-4xl text-yellow-400 border-b border-yellow-500 w-fit pb-3'>About</h2>
                <div>
                    <p className='2xl:text-xl text-sm text-justify pt-5 leading-loose'>
                        Overseas High School is a nursery and primary school that prides itself on 
                        offering superior, application-based education. Its mission is to produce 
                        top-performing ‘smart’ students – students who are knowledgeable, innovative, 
                        forward thinking and morally sound. At OHS, we do not just educate students, 
                        we mold them to become tomorrow’s pacesetters.
                    </p>
                </div>
            </div>


            <div>
                <h2 className='text-center text-3xl py-10'>Gallery</h2>

                <div className='grid grid-cols-2 gap-10'>
                    <div className='bg-black rounded-2xl'>
                        <img src={a} alt="" className='rounded-2xl hover:opacity-85 cursor-pointer'/>
                    </div>

                    <div className='bg-black rounded-2xl'>
                        <img src={b} alt="" className='rounded-2xl hover:opacity-85 cursor-pointer'/>
                    </div>


                    <div className='bg-black rounded-2xl'>
                        <img src={c} alt="" className='rounded-2xl hover:opacity-85 cursor-pointer'/>
                    </div>


                    <div className='bg-black rounded-2xl'>
                        <img src={d} alt="" className='rounded-2xl hover:opacity-85 cursor-pointer'/>
                    </div>


                    <div className='bg-black rounded-2xl'>
                        <img src={e} alt="" className='rounded-2xl hover:opacity-85 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>


        <div>

            <div className='bg-yellow-500 p-10 mt-20 '>
                <h2 className='text-center text-3xl text-white'>Our School</h2>
                <p className='text-center text-white py-3'>Here are some statistics about our School.</p>
                

                <div className='flex gap-28 text-white justify-center pt-10'>
                    <div className = "flex gap-5 items-center">
                        <p className="text-7xl "><GrCertificate /></p>
                        
                        <div>
                            <h2 className='text-3xl font-bold'>50</h2>
                            <p>Certified Teacher</p>
                        </div>
                    </div>

                    <div className = "flex gap-5 items-center">
                        <p className="text-7xl "><IoSchoolSharp /></p>
                        
                        <div>
                            <h2 className='text-3xl font-bold'>4</h2>
                            <p>Schools</p>
                        </div>
                    </div>


                    <div className = "flex gap-5 items-center">
                        <p className="text-7xl "><BsCalendar2DateFill/></p>
                        
                        <div>
                            <h2 className='text-3xl font-bold'>50</h2>
                            <p>Certified Teacher</p>
                        </div>
                    </div>


                    <div className = "flex gap-5 items-center">
                        <p className="text-7xl "><FaUserGraduate /></p>
                        
                        <div>
                            <h2 className='text-3xl font-bold'>10</h2>
                            <p>Years Old</p>
                        </div>
                    </div>
                </div>


                

            </div>



            <div className='py-10 px-[16rem]'>
                <h2 className='text-center text-3xl py-10'>News and events</h2>

                <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-neutral-100 rounded-lg'>
                            <div className='w-full rounded-lg'>
                                <img src={a} alt="" className='rounded-lg'/>
                            </div>

                            <div className='p-5 text-black'>
                                <h2 className='text-xl font-semibold'>End of year event</h2>
                                <p>October 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-neutral-100 rounded-lg'>
                            <div className='w-full rounded-lg'>
                                <img src={b} alt="" className='rounded-lg'/>
                            </div>

                            <div className='p-5 text-black'>
                                <h2 className='text-xl font-semibold'>End of year event</h2>
                                <p>October 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-neutral-100 rounded-lg'>
                            <div className='w-full rounded-lg'>
                                <img src={c} alt="" className='rounded-lg'/>
                            </div>

                            <div className='p-5 text-black'>
                                <h2 className='text-xl font-semibold'>End of year event</h2>
                                <p>October 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-neutral-100 rounded-lg'>
                            <div className='w-full rounded-lg'>
                                <img src={d} alt="" className='rounded-lg'/>
                            </div>

                            <div className='p-5 text-black'>
                                <h2 className='text-xl font-semibold'>End of year event</h2>
                                <p>October 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-neutral-100 rounded-lg'>
                            <div className='w-full rounded-lg'>
                                <img src={e} alt="" className='rounded-lg'/>
                            </div>

                            <div className='p-5 text-black'>
                                <h2 className='text-xl font-semibold'>End of year event</h2>
                                <p>October 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-neutral-100 rounded-lg'>
                            <div className='w-full rounded-lg'>
                                <img src={a} alt="" className='rounded-lg'/>
                            </div>

                            <div className='p-5 text-black'>
                                <h2 className='text-xl font-semibold'>End of year event</h2>
                                <p>October 2023</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                </>

            </div>

        </div>
    </div>
  )
}

export default SectionOne
