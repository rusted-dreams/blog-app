import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ModeToggle } from '../ui/themeToggle'

const Navbar = () => {
  return (
    <>
    <nav className='p-2 sticky top-0 backdrop-blur-xl'>
      <div className='container flex border-b justify-between items-center mx-auto w-full rounded-md'>
        <div className='text-lg font-bold'>SM</div>
        <div className='flex items-center gap-2 mb-2'>
          <Link href='/'>HOME</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
          <Button size='sm'>Post a Blog </Button>
          <ModeToggle />
          
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar