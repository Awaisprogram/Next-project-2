import React from 'react'

interface assert{
   click:string
}

function Button({click}:assert) {
  return (
    <>
      <button className='rounded-full py-3 px-5 bg-[#4285f4] mt-5 text-white font-md'>{click}</button>
    </>
  )
}

export default Button
