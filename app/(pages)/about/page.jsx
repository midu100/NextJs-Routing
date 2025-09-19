import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <section className='w-full h-screen bg-cover bg-center ' style={{background:"url('/next1.jpg')"}}>
      <div className="container">
          <h1 className='text-[32px] font-mono text-[#fff] font-bold'>This is about Page</h1>
      </div>
    </section>
    </>
  )
}

export default page