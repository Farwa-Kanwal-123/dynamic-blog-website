'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition duration-300">Farwa&#39;s Travels</Link>
        <Button
          className="lg:hidden"
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </Button>
        <ul className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:space-x-6 mt-4 lg:mt-0`}>
          <li><Link href="/" className="block py-2 hover:text-blue-200 transition duration-300">Home</Link></li>
          <li><Link href="/about" className="block py-2 hover:text-blue-200 transition duration-300">About</Link></li>
          <li><Link href="/blog" className="block py-2 hover:text-blue-200 transition duration-300">Blog</Link></li>
          <li><Link href="/contact" className="block py-2 hover:text-blue-200 transition duration-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

