'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Simplified for a single page app. We can assume the first link is active by default.
  const activeClass = "text-jp-red border-b-2 border-jp-red font-bold";
  const inactiveClass = "text-jp-black hover:text-jp-red transition-colors font-medium";

  return (
    <header className="bg-white border-b-2 border-jp-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Left Side: Logo/Text and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-jp-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <Link href="/" className="text-2xl font-bold tracking-widest text-jp-black flex items-center gap-2">
            日本産
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#hero" className={activeClass}>Inicio</Link>
          <Link href="#about" className={inactiveClass}>Sobre Mí</Link>
          <Link href="#projects" className={inactiveClass}>Proyectos</Link>
          <Link href="#contact" className={inactiveClass}>Contacto</Link>
        </nav>
      </div>

      {/* Mobile Navigation Full Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-jp-darkred text-white pt-24 px-8 overscroll-contain">
          <nav className="flex flex-col space-y-6 text-2xl font-bold tracking-wider">
            <Link 
              href="#hero" 
              className="hover:text-jp-gray transition-colors border-b border-white/20 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="#about" 
              className="hover:text-jp-gray transition-colors border-b border-white/20 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Mí
            </Link>
            <Link 
              href="#projects" 
              className="hover:text-jp-gray transition-colors border-b border-white/20 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-jp-gray transition-colors border-b border-white/20 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
} 