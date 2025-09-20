'use client'
import Link from 'next/link'
import React from 'react'

const SideNav = () => {
  return (
    <>
      <nav className='h-screen w-[300px] bg-sky-500'>
         <div className="container">
            <div className="row ">
                <ul className='pt-[30px] flex gap-[15px] justify-center items-center flex-col text-[#fff]'>
                    <li><Link href={'/services/mern'} className='hover:bg-[#fff] hover:px-[30px] hover:py-[15px] hover:text-[#000] rounded-[5px] duration-[.4s]'>MERN STACK</Link></li>
                    <li><Link href={'/services/uiux'} className='hover:bg-[#fff] hover:px-[30px] hover:py-[15px] hover:text-[#000] rounded-[5px] duration-[.4s]'>UI / UX</Link></li>
                    <li><Link href={'/services/dm'} className='hover:bg-[#fff] hover:px-[30px] hover:py-[15px] hover:text-[#000] rounded-[5px] duration-[.4s]'>DM</Link></li>
                    <li><Link href={'/services/motion'} className='hover:bg-[#fff] hover:px-[30px] hover:py-[15px] hover:text-[#000] rounded-[5px] duration-[.4s]'>MOTION</Link></li>
                </ul>
            </div>
         </div>
      </nav>
    </>
  )
}

export default SideNav