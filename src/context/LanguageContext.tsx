'use client'

import { createContext, useState, useEffect, useContext, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string // Función para traducir textos
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

import { es } from '@/locales/es'
import { en } from '@/locales/en'

// Diccionarios de traducciones 
const translations = {
  es,
  en
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es') // Español por defecto
  
  // Efecto para inicializar el idioma
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      // Detectar el idioma del navegador
      const browserLang = navigator.language.split('-')[0]
      setLanguage(browserLang === 'es' ? 'es' : 'en')
    }
  }, [])
  
  // Efecto para guardar el idioma seleccionado
  useEffect(() => {
    localStorage.setItem('language', language)
    // Puedes agregar aquí más lógica si necesitas cambiar algo en la aplicación cuando cambia el idioma
  }, [language])
  
  // Función para traducir textos
  const t = (key: string): string => {
    // @ts-ignore: El error es por tipado, pero la función funciona correctamente
    return translations[language][key] || key
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 