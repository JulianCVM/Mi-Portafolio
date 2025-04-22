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
      title: 'E-commerce Website',
      description: 'Tienda en línea completa con carrito de compras, proceso de pago y panel de administración.',
      image: '/placeholder-project.jpg',
      tags: ['react', 'nodejs', 'mongodb'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/tu-usuario/project1',
    },
    {
      id: 2,
      title: 'App de Gestión de Tareas',
      description: 'Aplicación para gestionar tareas con funcionalidad de arrastrar y soltar, etiquetas y filtros.',
      image: '/placeholder-project.jpg',
      tags: ['react', 'firebase'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/tu-usuario/project2',
    },
    {
      id: 3,
      title: 'Blog Personal',
      description: 'Blog con sistema de gestión de contenidos, comentarios y panel de administración.',
      image: '/placeholder-project.jpg',
      tags: ['nextjs', 'tailwind'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/tu-usuario/project3',
    },
    {
      id: 4,
      title: 'Dashboard Analítico',
      description: 'Panel de control con gráficos interactivos y visualización de datos en tiempo real.',
      image: '/placeholder-project.jpg',
      tags: ['react', 'chartjs', 'nodejs'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/tu-usuario/project4',
    },
    {
      id: 5,
      title: 'App de Clima',
      description: 'Aplicación que muestra el clima actual y pronóstico utilizando la API de OpenWeatherMap.',
      image: '/placeholder-project.jpg',
      tags: ['react', 'api'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/tu-usuario/project5',
    },
    {
      id: 6,
      title: 'Clon de Netflix',
      description: 'Réplica de la interfaz de Netflix con funcionalidad de reproducción de trailers.',
      image: '/placeholder-project.jpg',
      tags: ['react', 'firebase', 'api'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/tu-usuario/project6',
    }
  ]

  const filters = ['todos', 'react', 'nextjs', 'nodejs', 'mongodb', 'firebase', 'api', 'tailwind']

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