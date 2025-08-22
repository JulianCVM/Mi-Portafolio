'use client'

import Image from 'next/image'
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
        
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden group">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
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
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-1.5 px-3"
                  >
                    Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Código
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