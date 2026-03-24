'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-jp-black border-t-4 border-jp-red pt-16 pb-8 relative overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jp-red opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-gray-800 pb-12 mb-8">
          
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-3xl font-extrabold text-white uppercase tracking-tighter hover:text-jp-red transition-colors inline-block">
              Julián <span className="text-jp-red">Villamizar</span>
            </Link>
            <p className="text-gray-400 font-bold mt-2 max-w-sm uppercase text-xs tracking-widest border-l-2 border-jp-red pl-3">
              Desarrollador Backend & Arquitecto de Software
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/JulianCVM" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-jp-red font-bold uppercase tracking-widest text-sm transition-colors border-2 border-gray-700 hover:border-jp-red py-2 px-4 bg-gray-900">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/julian-camilo-villamizar-monta%C3%B1ez-a65ab9232/" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-jp-red font-bold uppercase tracking-widest text-sm transition-colors border-2 border-gray-700 hover:border-jp-red py-2 px-4 bg-gray-900">
              LinkedIn
            </a>
            <a href="mailto:juliancamilovm22@gmail.com" 
               className="text-white hover:text-jp-red font-bold uppercase tracking-widest text-sm transition-colors border-2 border-gray-700 hover:border-jp-red py-2 px-4 bg-gray-900">
              Email
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 font-bold text-xs uppercase tracking-widest text-center md:text-left">
            © {currentYear} Julián Camilo Villamizar Montañez. Todos los derechos reservados.
          </p>
          
          <div className="mt-6 md:mt-0 font-bold text-jp-red text-xs uppercase tracking-widest bg-gray-900 py-1 px-3 border border-gray-800">
            日本産 Brutalist Design
          </div>
        </div>
      </div>
    </footer>
  )
}