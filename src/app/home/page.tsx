import React from 'react'
import Image from 'next/image'
import hero from '../images/hero.svg'
import Button from '../components/Button'

function Main() {
  return (
    <>
    <div className="flex lg:flex-row flex-col-reverse p-10 justify-between items-center">
      <div className="lg:w-3/5 w-full">
        <h1 className='lg:text-6xl mt-3 text-4xl font-semibold'>Make Your Business More Profitable</h1>
        <p className='mt-3 text-[#6c757d]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
        <Button click='Get Started'/>
      </div>
      <div className="">
       <Image src={hero} alt=''></Image>
      </div>
      
      </div>
    </>
  )
}

export default Main
