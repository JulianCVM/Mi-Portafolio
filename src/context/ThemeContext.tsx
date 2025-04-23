'use client'

import { createContext, useState, useEffect, useContext, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Intenta obtener el tema del localStorage o usa las preferencias del sistema
  const [theme, setTheme] = useState<Theme>('light')
  
  // Efecto para inicializar el tema
  useEffect(() => {
    // Verifica si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null
    
    // Si hay un tema guardado, úsalo
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Si no hay tema guardado, detecta las preferencias del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])
  
  // Efecto para aplicar el tema al body
  useEffect(() => {
    // Guarda el tema en localStorage
    localStorage.setItem('theme', theme)
    
    // Aplica la clase dark al elemento html cuando sea necesario
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 