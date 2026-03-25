'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Active section highlighting
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      let current = ''
      sections.forEach((sec) => {
        const el = document.getElementById(sec)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = sec
          }
        }
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    // Trigger once on load
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t('nav.home') + '.java', href: '#home', id: 'home' },
    { name: t('nav.about') + '.java', href: '#about', id: 'about' },
    { name: t('nav.projects') + '.java', href: '#projects', id: 'projects' },
    { name: t('nav.skills') + '.java', href: '#skills', id: 'skills' },
    { name: t('nav.contact') + '.java', href: '#contact', id: 'contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 h-[60px] bg-bg/85 backdrop-blur-md z-[100] border-b transition-colors duration-300 ${isScrolled ? 'border-orange' : 'border-transparent'}`}>
      <div className="container-custom h-full flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 font-medium text-text no-underline">
          <span className="text-orange font-bold tracking-tighter">○──○</span>
          <span>portfolio.dev</span>
        </Link>
        
        <ul className="hidden md:flex gap-8 list-none m-0 p-0 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className={`text-muted no-underline relative inline-flex items-center gap-2 transition-colors duration-300 group ${activeSection === link.id ? 'text-text' : 'hover:text-text'}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-orange transition-opacity duration-300 ${activeSection === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-orange transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-muted hover:text-text focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-[60px] left-0 right-0 bg-bg border-b border-border md:hidden">
            <ul className="flex flex-col p-4 gap-4 m-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-muted no-underline ${activeSection === link.id ? 'text-text' : 'hover:text-text'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}