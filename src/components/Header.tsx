'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
      
      // Calcular el progreso del scroll para toda la página
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-white dark:bg-secondary shadow-sm sticky top-0 z-50 relative overflow-hidden">
      {/* Elementos animados de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full -mr-20 -mt-20 transform animate-float"
          style={{
            animation: 'float 15s infinite ease-in-out',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/4 w-40 h-40 bg-blue-400 opacity-5 rounded-full transform"
          style={{
            animation: 'float 12s infinite ease-in-out',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500 opacity-5 rounded-full transform"
          style={{
            animation: 'float 10s infinite ease-in-out',
            animationDelay: '1s'
          }}
        ></div>
        
        {/* Barra de progreso para toda la página */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
          <div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600"
            style={{
              width: `${scrollProgress}%`,
              transition: 'width 0.3s ease-out'
            }}
          ></div>
        </div>
      </div>

      <div className="container-custom py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Mi Portafolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Sobre mí
            </Link>
            <Link href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Habilidades
            </Link>
            <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Proyectos
            </Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-3">
            <Link 
              href="#about" 
              className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mí
            </Link>
            <Link 
              href="#skills" 
              className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Habilidades
            </Link>
            <Link 
              href="#projects" 
              className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link 
              href="#contact" 
              className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
} 