import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const About = () => {
  return (
    <div>
      <Navbar />

      <div>
            <div className='bg-black h-[15rem] text-white 2xl:px-[16rem] xl:px-[10rem] lg:px-[10rem] pt-32 px-5 p-10'>
                <h2 className='text-4xl pb-5 border-b w-fit border-b-orange-400'>About</h2> 
            </div>

            <div className='2xl:px-[20rem] xl:px-[10rem] lg:px-[10rem] px-5'>
                <p className='2xl:text-xl text-lg text-justify 2xl:pt-20 pt-10 leading-loose'>
                    Overseas High School is a nursery and primary school that prides itself on 
                    offering superior, application-based education. Its mission is to produce 
                    top-performing ‘smart’ students – students who are knowledgeable, innovative, 
                    forward thinking and morally sound. At OHS, we do not just educate students, 
                    we mold them to become tomorrow’s pacesetters.
                </p>
            </div>


            <div className='2xl:px-[20rem] xl:px-[10rem] lg:px-[10rem] pb-20 px-5 text-black mt-10 rounded-lg 2xl:p-20' data-aos="fade-up" data-aos-duration="1000">
                <h2 className='2xl:text-4xl xl:text-2xl lg:text-2xl text-xl'>Our Vision & Mission Statement</h2>
                <div>
                    <p className='2xl:text-xl text-lg  text-justify pt-5 leading-loose'>
                        Our vision at OHS is to be ranked among the top ten schools in Nigeria. 
                        Therefore, we strive to set a high academic standard for all levels of 
                        education. Our students are trained to develop the intellectual capacity, 
                        technological skillset, practical skills, and moral foundation that will 
                        prepare them to excel in any field in any part of the world.

                    </p>
                </div>
            </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
