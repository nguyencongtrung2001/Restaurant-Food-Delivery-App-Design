"use client";
import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 text-orange-500 flex items-center justify-between p-4 border-b-2 border-b-orange-300 uppercase md:h-24'>
      <div className='hidden md:flex gap-4 flex-1'>
          <Link href="/" className='text-l'>Homepage</Link>
          <Link href="/menu" className='text-l'>Menu</Link>
          <Link href="/contact" className='text-l'>Contact</Link>
      </div>
      <div>
        <Link href="/" className='text-2xl md:font-bold flex-1'>Massimo</Link>
      </div>
      <div className='md:hidden'>
          <Menu/>
      </div>
      <div className='hidden md:flex gap-4 items-center justify-end flex-1' >
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-amber-300 px-1 rounded-2xl'>
          <Image  src="/phone.png" alt='' width={20} height={20}/>
          <span>123 456 789</span>
        </div>
          {
            !user ?  (
              <Link href="/login">Login</Link>
            ) : (
              <Link href="/orders">Orders</Link>
            )
          }
      </div>
    </div>
  )
}

export default Navbar
