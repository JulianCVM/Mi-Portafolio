'use client'

import { useState, useEffect } from 'react'
import { FiSettings, FiMoon, FiSun, FiGlobe, FiX } from 'react-icons/fi'
import { useLanguage } from '@/context/LanguageContext'

type ConfigMenuProps = {
  onThemeChange: (theme: 'light' | 'dark') => void
  onLanguageChange: (lang: 'es' | 'en') => void
  currentTheme: 'light' | 'dark'
  currentLanguage: 'es' | 'en'
}

export default function ConfigMenu({ 
  onThemeChange, 
  onLanguageChange, 
  currentTheme, 
  currentLanguage 
}: ConfigMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage();

  // Cierra el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest('[data-config-menu]')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="fixed bottom-6 right-6 z-50" data-config-menu>
      {/* Botón de configuración */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors"
        aria-label={isOpen ? "Cerrar menú de configuración" : "Abrir menú de configuración"}
      >
        {isOpen ? <FiX size={20} /> : <FiSettings size={20} className="animate-spin-slow" />}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-200">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t('config.title')}</h3>
          </div>
          
          {/* Opciones del menú */}
          <div className="p-4 space-y-4">
            {/* Selector de tema */}
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('config.theme')}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => onThemeChange('light')}
                  className={`flex-1 py-2 px-3 rounded-md flex items-center justify-center space-x-2 transition-colors ${
                    currentTheme === 'light' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <FiSun size={16} />
                  <span>{t('config.theme.light')}</span>
                </button>
                <button
                  onClick={() => onThemeChange('dark')}
                  className={`flex-1 py-2 px-3 rounded-md flex items-center justify-center space-x-2 transition-colors ${
                    currentTheme === 'dark' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <FiMoon size={16} />
                  <span>{t('config.theme.dark')}</span>
                </button>
              </div>
            </div>
            
            {/* Selector de idioma */}
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('config.language')}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => onLanguageChange('es')}
                  className={`flex-1 py-2 px-3 rounded-md flex items-center justify-center space-x-2 transition-colors ${
                    currentLanguage === 'es' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <FiGlobe size={16} />
                  <span>{t('config.language.es')}</span>
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`flex-1 py-2 px-3 rounded-md flex items-center justify-center space-x-2 transition-colors ${
                    currentLanguage === 'en' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <FiGlobe size={16} />
                  <span>{t('config.language.en')}</span>
                </button>
              </div>
            </div>

            {/* Accesibilidad - Tamaño de texto */}
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('config.textSize')}</p>
              <div className="flex items-center space-x-2">
                <button 
                  className="w-8 h-8 rounded-md flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  onClick={() => {
                    const currentSize = parseInt(localStorage.getItem('textSize') || '100')
                    const newSize = Math.max(80, currentSize - 10)
                    document.documentElement.style.fontSize = `${newSize}%`
                    localStorage.setItem('textSize', newSize.toString())
                  }}
                >
                  A<span className="text-xs">-</span>
                </button>
                <input 
                  type="range" 
                  min="80" 
                  max="120" 
                  defaultValue={localStorage.getItem('textSize') || "100"}
                  onChange={(e) => {
                    const newSize = e.target.value
                    document.documentElement.style.fontSize = `${newSize}%`
                    localStorage.setItem('textSize', newSize)
                  }}
                  className="flex-1 accent-primary"
                />
                <button 
                  className="w-8 h-8 rounded-md flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  onClick={() => {
                    const currentSize = parseInt(localStorage.getItem('textSize') || '100')
                    const newSize = Math.min(120, currentSize + 10)
                    document.documentElement.style.fontSize = `${newSize}%`
                    localStorage.setItem('textSize', newSize.toString())
                  }}
                >
                  A<span className="text-xs">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 