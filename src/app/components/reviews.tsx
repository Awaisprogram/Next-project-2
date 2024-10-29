import React from 'react'
import Image from 'next/image'
import TestimonialCard from '../components/Test'
import review1 from '../images/review1.svg'
import review2 from '../images/review2.svg'

function Review() {
  return (
    <div>
       <div className="flex lg:flex-row flex-col-reverse p-10 justify-between items-center mt-5">
      <div className="">
       <Image src={review1} alt=''></Image>
      </div>
      <div className="lg:w-3/5 w-full">
      
        <h1 className='lg:text-6xl mt-3 text-4xl font-semibold'>Communicate and gather feedback</h1>
        <p className='mt-3 text-[#6c757d]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
        <TestimonialCard name='Kimberly Gush
'/>
      </div>
      
      </div> 
      <div className="flex lg:flex-row flex-col p-10 justify-between items-center mt-5">
      
      <div className="lg:w-3/5 w-full">
      
        <h1 className='lg:text-6xl mt-3 text-4xl font-semibold'>Communicate and gather feedback</h1>
        <p className='mt-3 text-[#6c757d]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
        <TestimonialCard name='Grey Simpson'/>
      </div>
      <div className="">
       <Image src={review2} alt=''></Image>
      </div>
      </div> 
    </div>
  )
}

export default Review
