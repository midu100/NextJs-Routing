'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [data,setData]=useState()
  return (
    <>
      <nav className='py-[20px] bg-[#FFF1F1]'>
         <div className="container">
            <div className="row flex justify-between">
                <div className="Img">
                    <Image alt='Logo' src='/next.svg' width={80} height={40}
 />
                </div>

                <ul className='flex gap-[20px] justify-center'>
                    <li><Link className='text-[18px] font-mono text-[#000]' href={'/'}>Home</Link></li>
                    <li><Link className='text-[18px] font-mono text-[#000]' href={'/about'}>About</Link></li>
                    <li><Link className='text-[18px] font-mono text-[#000]' href={'/services'}>Services</Link></li>
                    <li><Link className='text-[18px] font-mono text-[#000]' href={'/contact'}>Contact</Link></li>
                </ul>
            </div>
         </div>
      </nav>
    </>
  )
}

export default Navbar