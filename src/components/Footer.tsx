'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-accent/50 to-white dark:from-secondary dark:to-gray-900 py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary dark:text-primary-light">
              Julián Villamizar
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Desarrollado con pasión y tecnología moderna
            </p>
            <div className="mt-3 flex flex-col space-y-1">
              <a href="mailto:juliancamilovm22@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                juliancamilovm22@gmail.com
              </a>
              <p className="text-gray-600 dark:text-gray-400 flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bucaramanga, Colombia
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-medium text-secondary dark:text-white mb-3">Conéctate conmigo</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/JulianCVM" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors transform hover:scale-110 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/julian-camilo-villamizar-monta%C3%B1ez-a65ab9232/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors transform hover:scale-110 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href="mailto:juliancamilovm22@hotmail.com" 
                 className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors transform hover:scale-110 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <Link 
                href="#contact" 
                className="text-sm px-4 py-2 border border-primary dark:border-primary-light text-primary dark:text-primary-light rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-secondary transition-colors duration-300"
              >
                Contáctame
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary/20 dark:border-primary-dark/30 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Julián Camilo Villamizar Montañez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 