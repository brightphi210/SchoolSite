import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const SectionOne = () => {
  return (

    <div>
        <div className='myBg'>
            <div className='isolate flex justify-center items-center h-full'>
                <div>
                    <h2 className='text-7xl text-center text-white font-bold'>We are Commited <br /> to  Excellence</h2>
                    <p className='text-white font-medium text-center text-2xl py-5'>We commited to raising champions  and <br /> excellent students globally</p>
                    <div className='flex justify-center items-center mt-3 gap-4'>
                        <button className='px-10 py-3 text-black bg-white rounded-full flex gap-3 items-center'>Gallery <FaArrowRight /></button>
                        <button className='px-10 py-3 text-white bg-blue-500 rounded-full flex items-center gap-3'>Contact us <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>


        <div className='px-[20rem]'>


            <div>
                <h2 className='text-4xl text-center pt-10'>The School’s Leadership</h2>
                <div>
                    <div>
                        
                    </div>

                    <div>
                        <p className='text-lg'>
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
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h2>About</h2>
                <div>
                    <p className='text-lg'>
                        Overseas High School is a nursery and primary school that prides itself on 
                        offering superior, application-based education. Its mission is to produce 
                        top-performing ‘smart’ students – students who are knowledgeable, innovative, 
                        forward thinking and morally sound. At OHS, we do not just educate students, 
                        we mold them to become tomorrow’s pacesetters.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionOne
