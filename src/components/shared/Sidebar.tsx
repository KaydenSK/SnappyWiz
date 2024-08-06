'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn } from '@clerk/nextjs';
import { navLinks } from '@/constants/index';
import { link } from 'fs';
import { usePathname } from 'next/navigation';

const Sidebar = () => {


  const pathname = usePathname();

  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href="/" className='sidbar-logo'>
                <Image src='' alt='logo' width={180} height={28}/>
            </Link>

            <nav className='sidebarr-nav'>
              <SignedIn>
                  {navLinks.map((link, i) =>{
                    const isActive = link.route === pathname

                    return(
                      <li key={i} className={`sidebar-nav_element group ${isActive ? "bg-purple-700 text-white" : "text-gray-700"}`}>

                        <Link className='sidebar-link' href={link.route}>
                          <Image 
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${isActive && 'brightness-200'}`}
                          />
                          {link.label}
                          
                        </Link>
                      </li>
                    )
                  })}
              </SignedIn>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar