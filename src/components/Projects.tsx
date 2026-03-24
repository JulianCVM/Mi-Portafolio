'use client'

import { useState } from 'react'
import Image from 'next/image'

type Project = {
  id: number
  title: string
  subtitle: string
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
      title: 'SISTEMA BANCARIO CL',
      subtitle: 'FINTECH · BASE DE DATOS',
      image: '/neon_dragon.png', // Fallback, will ideally use project specific images
      tags: ['mysql', 'database', 'fintech'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'COLOMBIAN COFFEE API',
      subtitle: 'ARQUITECTURA LIMPIA · PHP',
      image: '/neon_wave.png',
      tags: ['php', 'api'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'GEOAPP DASHBOARD',
      subtitle: 'LARAVEL · GIS',
      image: '/neon_crane.png',
      tags: ['laravel', 'gis'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'FORMULA 1 BACKEND',
      subtitle: 'NODE.JS · MONGODB',
      image: '/neon_dragon.png',
      tags: ['nodejs', 'mongodb'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'SISTEMA LLM JAVA',
      subtitle: 'IA · MICROSERVICIOS',
      image: '/neon_crane.png',
      tags: ['java', 'ai'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'REALTIME REPORTS API',
      subtitle: '.NET · KUBERNETES',
      image: '/neon_wave.png',
      tags: ['dotnet', 'api', 'docker'],
      demoUrl: '#',
      githubUrl: '#',
    }
  ]

  const filters = ['todos', 'php', 'laravel', 'java', 'nodejs', 'dotnet', 'database', 'api', 'ai', 'gis']

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  // First 3 for featured
  const featured = projects.slice(0, 3)

  return (
    <section id="projects" className="py-12 bg-jp-bg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TRABAJOS DESTACADOS - MASONRY/GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          
          {/* TALL COLUMN - Neon Gold Crane style */}
          <div className="lg:col-span-1 lg:row-span-2 group cursor-pointer relative flex flex-col">
            <div className="w-full aspect-[2/3] relative border-2 border-jp-black bg-jp-red mb-3 overflow-hidden">
               <Image src="/neon_crane.png" alt={featured[0]?.title || "Featured 1"} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-extrabold text-jp-black text-lg">{featured[0]?.title}</h3>
            <p className="text-sm font-bold tracking-widest text-jp-black">{featured[0]?.subtitle}</p>
          </div>

          {/* LARGE MIDDLE COLUMN - Square (Neon Dragon) */}
          <div className="lg:col-span-2 group cursor-pointer relative flex flex-col">
            <div className="w-full aspect-square md:aspect-video lg:aspect-square relative border-2 border-jp-black bg-jp-black mb-3 overflow-hidden">
               <Image src="/neon_dragon.png" alt={featured[1]?.title || "Featured 2"} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-extrabold text-jp-black text-lg">{featured[1]?.title}</h3>
            <p className="text-sm font-bold tracking-widest text-jp-black">{featured[1]?.subtitle}</p>
          </div>

          {/* RIGHT COLUMN - Multiple smaller blocks depending on layout, we adapt it simply */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="group cursor-pointer relative flex flex-col">
              <div className="w-full aspect-[4/3] relative border-2 border-jp-black bg-gray-200 mb-3 overflow-hidden">
                 <Image src="/neon_wave.png" alt={featured[2]?.title || "Featured 3"} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-extrabold text-jp-black text-lg">{featured[2]?.title}</h3>
              <p className="text-sm font-bold tracking-widest text-jp-black">{featured[2]?.subtitle}</p>
            </div>
            
            <div className="border-t-2 border-jp-black pt-4">
              <p className="text-jp-black font-bold uppercase tracking-widest mb-2">Detalles del Proyecto</p>
              <p className="text-sm text-jp-black opacity-80 mb-4">
                Desarrollo end-to-end con enfoques modernos, asegurando rendimiento y escalabilidad.
              </p>
              <a href="#projects-full" className="inline-block border-2 border-jp-black px-4 py-2 font-bold hover:bg-jp-black hover:text-white transition-colors">
                VER GALERÍA
              </a>
            </div>
          </div>
        </div>

        {/* GALERÍA DE PROYECTOS COMPLETA */}
        <div id="projects-full" className="mt-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-jp-black mb-6 uppercase">
            Galería de Proyectos Completa
          </h2>
          
          {/* SEARCH / FILTER BAR BRUTALIST STYLE */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-grow border-2 border-jp-black bg-white flex items-center px-4 py-2">
              <span className="text-jp-black font-bold mr-2">Filtra •</span>
              <div className="flex overflow-x-auto gap-2 scrollbar-hide">
                {filters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`whitespace-nowrap px-3 py-1 font-bold text-sm uppercase transition-colors ${
                      activeFilter === filter
                        ? 'bg-jp-red text-white'
                        : 'text-jp-black hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer flex flex-col">
                <div className="w-full aspect-square relative border-2 border-jp-black bg-jp-black mb-4 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="font-extrabold text-jp-black text-xl leading-tight uppercase">{project.title}</h3>
                <p className="text-xs font-bold tracking-widest text-jp-black opacity-80 mt-1">{project.subtitle}</p>
                
                <div className="flex gap-2 mt-3">
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border-2 border-jp-black px-3 py-1 text-xs font-bold uppercase hover:bg-jp-black hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Ver Código
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
} 