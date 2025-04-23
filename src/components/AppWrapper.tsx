'use client'

import { ReactNode, useState, useEffect } from 'react'
import ConfigMenu from './ConfigMenu'
import { useTheme } from '@/context/ThemeContext'
import { useLanguage } from '@/context/LanguageContext'

interface AppWrapperProps {
  children: ReactNode
}

export default function AppWrapper({ children }: AppWrapperProps) {
  // Estados para controlar si se ha cargado la página para evitar animaciones indeseadas
  const [mounted, setMounted] = useState(false)
  
  // Acceder a los hooks de tema e idioma
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  
  // Asegurarse de que el componente solo se renderiza en el cliente
  useEffect(() => {
    setMounted(true)
    
    // Aplicar un efecto de texto de la página según el tamaño seleccionado por el usuario
    const textSize = localStorage.getItem('textSize') || '100'
    document.documentElement.style.fontSize = `${textSize}%`
    
    // Verificar si hay cambios en las preferencias del sistema
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      // Solo cambiar el tema automáticamente si no ha sido establecido manualmente
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }
    
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange)
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange)
    }
  }, [setTheme])
  
  // No renderizar nada hasta que se monte el componente
  if (!mounted) {
    return null
  }
  
  // Función para aplicar el tema
  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    // Aplicar la clase de tema inmediatamente
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  // Función para cambiar el idioma
  const handleLanguageChange = (newLanguage: 'es' | 'en') => {
    setLanguage(newLanguage)
    // Actualizar el atributo lang del documento
    document.documentElement.setAttribute('lang', newLanguage)
  }
  
  return (
    <>
      {children}
      <ConfigMenu 
        currentTheme={theme} 
        currentLanguage={language} 
        onThemeChange={handleThemeChange} 
        onLanguageChange={handleLanguageChange} 
      />
    </>
  )
} 