import Link from 'next/link'
import React from 'react'

const navigations = [
  { name: 'Blog', href: '/blog' },
  { name: 'Project', href: '/project' },
  { name: 'Resume', href: '/Resume' },
]

export default function Navbar() {
  return (
    <div className='fixed top-0 left-1/2 -translate-x-1/2 max-w-[1126px] w-screen py-[48px] flex items-center z-20'>
      <div className='hidden md:flex gap-[40px]'>
        {navigations.map((nav) => (
          <Link
            key={nav.name}
            href={nav.href}
            className='font-normal text-[#DFDFDF] hover:text-[#FFF]'
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
