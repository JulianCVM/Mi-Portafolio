'use client'

import { useState } from 'react'

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const projects: Project[] = [
    {
      id: 1,
      title: '🏦 Sistema de Cuotas Banco CL',
      description: 'Sistema de base de datos completo para gestionar cuotas de manejo de tarjetas bancarias con lógica financiera compleja, triggers automáticos y procedimientos almacenados.',
      image: '/placeholder-project.jpg',
      tags: ['mysql', 'database', 'fintech', 'triggers', 'procedures'],
      demoUrl: 'https://github.com/JulianCVM/Proyecto_Banco_CL_Julian_Villamizar',
      githubUrl: 'https://github.com/JulianCVM/Proyecto_Banco_CL_Julian_Villamizar',
    },
    {
      id: 2,
      title: '☕ Colombian Coffee API',
      description: 'Sistema backend completo para gestión de variedades de café colombiano con Clean Architecture, PHP 8.x, DevContainer y documentación técnica completa.',
      image: '/placeholder-project.jpg',
      tags: ['php', 'clean-architecture', 'slim', 'docker', 'api'],
      demoUrl: 'https://github.com/JulianCVM/Colombian-Coffee',
      githubUrl: 'https://github.com/JulianCVM/Colombian-Coffee',
    },
    {
      id: 3,
      title: '🗺️ GeoApp Admin Dashboard',
      description: 'Panel de administración para aplicación móvil GeoApp con Laravel 10, manejo de datos espaciales PostGIS, y gestión de reportes georreferenciados.',
      image: '/placeholder-project.jpg',
      tags: ['laravel', 'php', 'postgis', 'supabase', 'gis'],
      demoUrl: 'https://github.com/JulianCVM/geoAppAdminDashboard',
      githubUrl: 'https://github.com/JulianCVM/geoAppAdminDashboard',
    },
    {
      id: 4,
      title: '🏁 Formula 1 API Backend',
      description: 'API REST completa para gestión de datos de Fórmula 1 con arquitectura hexagonal, Node.js, MongoDB y configuración completa con Docker Compose.',
      image: '/placeholder-project.jpg',
      tags: ['nodejs', 'mongodb', 'docker', 'hexagonal', 'api'],
      demoUrl: 'https://github.com/Arenas07/formula_1/tree/main',
      githubUrl: 'https://github.com/Arenas07/formula_1/tree/main',
    },
    {
      id: 5,
      title: '📱 GeoApp Mobile (Beta)',
      description: 'Aplicación móvil para reportes georreferenciados con sistema de logros, mapas interactivos y funcionalidades de geolocalización avanzadas.',
      image: '/placeholder-project.jpg',
      tags: ['mobile', 'react-native', 'geolocation', 'maps', 'firebase'],
      demoUrl: 'https://github.com/JuanJml01/geoappbeta',
      githubUrl: 'https://github.com/JuanJml01/geoappbeta',
    },
    {
      id: 6,
      title: '🤖 Sistema LLM con Java',
      description: 'Sistema modular desarrollado en Java con Spring Boot para integrar modelos de lenguaje personalizados (LLMs) con arquitectura de microservicios.',
      image: '/placeholder-project.jpg',
      tags: ['java', 'spring-boot', 'llm', 'microservices', 'ai'],
      demoUrl: 'https://github.com/JulianCVM/avance-proyecto-java',
      githubUrl: 'https://github.com/JulianCVM/avance-proyecto-java',
    }
  ]

  const filters = [
    'todos', 
    'php', 
    'laravel', 
    'java', 
    'nodejs', 
    'mysql', 
    'mongodb', 
    'docker', 
    'api', 
    'clean-architecture',
    'hexagonal',
    'fintech',
    'gis',
    'mobile',
    'ai'
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary">
      <div className="container-custom">
        <h2 className="section-title text-center">Mis Proyectos</h2>
        
        <div className="mt-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Filtrar por tecnología
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`group relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600'
                  }`}
                >
                  <span className="relative z-10">
                    {filter === 'todos' && '🔍 Todos'}
                    {filter === 'php' && '🐘 PHP'}
                    {filter === 'laravel' && '🔴 Laravel'}
                    {filter === 'java' && '☕ Java'}
                    {filter === 'nodejs' && '🟢 Node.js'}
                    {filter === 'mysql' && '🗄️ MySQL'}
                    {filter === 'mongodb' && '🍃 MongoDB'}
                    {filter === 'docker' && '🐳 Docker'}
                    {filter === 'api' && '🔗 API'}
                    {filter === 'clean-architecture' && '🏗️ Clean Arch'}
                    {filter === 'hexagonal' && '⬡ Hexagonal'}
                    {filter === 'fintech' && '💳 FinTech'}
                    {filter === 'gis' && '🗺️ GIS'}
                    {filter === 'mobile' && '📱 Mobile'}
                    {filter === 'ai' && '🤖 IA'}
                  </span>
                  {activeFilter === filter && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-xl opacity-20 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden group">
              <div className="relative h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2 opacity-60">
                    {project.id === 1 && '🏦'}
                    {project.id === 2 && '☕'}
                    {project.id === 3 && '🗺️'}
                    {project.id === 4 && '🏁'}
                    {project.id === 5 && '📱'}
                    {project.id === 6 && '🤖'}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {project.tags[0].toUpperCase()}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Proyecto
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 