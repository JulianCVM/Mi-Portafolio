'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

type Project = {
  id: number
  title: string
  pkg: string
  description: string
  tags: string[]
  metrics: { l1: string, v1: string, l2: string, v2: string, l3: string, v3: string }
  type: 'api' | 'micro' | 'full'
  demoUrl: string
  githubUrl: string
  version: string
  status: string
}

export default function Projects() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'SistemaBancarioDB',
      pkg: 'com.julian.fintech.banco',
      description: t('projects.1.desc'),
      tags: ['mysql', 'procedures', 'fintech'],
      metrics: { l1: 'tables', v1: '40+', l2: 'triggers', v2: '15', l3: 'status', v3: '100%' },
      type: 'micro',
      demoUrl: '#',
      githubUrl: 'https://github.com/JulianCVM/Proyecto_Banco_CL_Julian_Villamizar',
      version: 'v2.0',
      status: 'PROD ✓'
    },
    {
      id: 2,
      title: 'CoffeeManagerAPI',
      pkg: 'com.julian.api.coffee',
      description: t('projects.2.desc'),
      tags: ['php', 'clean-arch', 'docker'],
      metrics: { l1: 'endpoints', v1: '25', l2: 'coverage', v2: '95%', l3: 'arch', v3: 'Clean' },
      type: 'api',
      demoUrl: '#',
      githubUrl: 'https://github.com/JulianCVM/Colombian-Coffee',
      version: 'v1.1',
      status: 'PROD ✓'
    },
    {
      id: 3,
      title: 'GeoAppDashboard',
      pkg: 'com.julian.gis.admin',
      description: t('projects.3.desc'),
      tags: ['laravel', 'postgis', 'supabase'],
      metrics: { l1: 'users', v1: 'Admin', l2: 'maps', v2: 'GIS', l3: 'framework', v3: 'Lv10' },
      type: 'full',
      demoUrl: '#',
      githubUrl: 'https://github.com/JulianCVM/geoAppAdminDashboard',
      version: 'v1.5',
      status: 'PROD ✓'
    },
    {
      id: 4,
      title: 'Formula1REST',
      pkg: 'com.julian.sports.f1',
      description: t('projects.4.desc'),
      tags: ['nodejs', 'mongodb', 'hexagonal'],
      metrics: { l1: 'routes', v1: '50+', l2: 'containers', v2: 'Db+App', l3: 'uptime', v3: '99%' },
      type: 'api',
      demoUrl: '#',
      githubUrl: 'https://github.com/Arenas07/formula_1/tree/main',
      version: 'v3.0',
      status: 'PROD ✓'
    },
    {
      id: 6,
      title: 'SystemLLM',
      pkg: 'com.julian.ai.llm',
      description: t('projects.6.desc'),
      tags: ['java', 'spring-boot', 'ai'],
      metrics: { l1: 'models', v1: 'Custom', l2: 'arch', v2: 'Micro', l3: 'state', v3: 'WIP' },
      type: 'micro',
      demoUrl: '#',
      githubUrl: 'https://github.com/JulianCVM/avance-proyecto-java',
      version: 'v0.9.0',
      status: 'WIP 🔄'
    },
    {
      id: 7,
      title: 'RealTimeReports',
      pkg: 'com.julian.dotnet.reports',
      description: t('projects.7.desc'),
      tags: ['c#', 'dotnet', 'kubernetes'],
      metrics: { l1: 'sockets', v1: 'SignalR', l2: 'infra', v2: 'K8s', l3: 'db', v3: 'SQL' },
      type: 'micro',
      demoUrl: '#',
      githubUrl: 'https://github.com/JulianCVM/.net-proyect',
      version: 'v1.0',
      status: 'PROD ✓'
    },
    {
      id: 8,
      title: 'OmniBaaS Enterprise',
      pkg: 'com.julian.omni.baas',
      description: t('projects.8.desc'),
      tags: ['java', 'zk-framework', 'postgresql', 'linux'],
      metrics: { l1: 'arch', v1: 'Server-C', l2: 'db', v2: 'ACID', l3: 'status', v3: 'PROD ✓' },
      type: 'full',
      demoUrl: '#',
      githubUrl: 'https://github.com/JulianCVM',
      version: 'v1.0',
      status: 'PROD ✓'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter)

  return (
    <section id="projects" className="min-h-screen pt-[100px] pb-[60px] flex flex-col justify-center container-custom">
      <div className="mb-12">
        <span className="comment block mb-2">// ProjectRepository.findAll()</span>
        <h2 className="section-title"><span className="type">@Query</span>(<span className="string">"SELECT * FROM projects"</span>)</h2>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-12">
        <button 
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-[15px] font-sans text-sm border transition-colors ${activeFilter === 'all' ? 'bg-orange text-bg border-orange' : 'bg-muted/20 border-border text-text hover:border-orange'}`}
        >
          {t('projects.filter.all')}
        </button>
        <button 
          onClick={() => setActiveFilter('api')}
          className={`px-4 py-2 rounded-[15px] font-sans text-sm border transition-colors ${activeFilter === 'api' ? 'bg-orange text-bg border-orange' : 'bg-muted/20 border-border text-text hover:border-orange'}`}
        >
          [@{t('projects.filter.api')}]
        </button>
        <button 
          onClick={() => setActiveFilter('micro')}
          className={`px-4 py-2 rounded-[15px] font-sans text-sm border transition-colors ${activeFilter === 'micro' ? 'bg-orange text-bg border-orange' : 'bg-muted/20 border-border text-text hover:border-orange'}`}
        >
          [@{t('projects.filter.micro')}]
        </button>
        <button 
          onClick={() => setActiveFilter('full')}
          className={`px-4 py-2 rounded-[15px] font-sans text-sm border transition-colors ${activeFilter === 'full' ? 'bg-orange text-bg border-orange' : 'bg-muted/20 border-border text-text hover:border-orange'}`}
        >
          [@{t('projects.filter.full')}]
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card !p-0 flex flex-col h-full bg-bg-card border-border hover:border-orange transition-colors">
            <div className={`p-4 border-b border-border flex justify-between items-center ${project.type==='api' ? 'border-t-2 border-t-orange' : project.type==='micro' ? 'border-t-2 border-t-blue' : 'border-t-2 border-t-green'}`}>
              <h3 className="font-display font-bold text-lg">{project.title}</h3>
              <div className="flex gap-2 text-xs items-center">
                <span className="text-muted">{project.version}</span>
                <span className={`px-1.5 py-0.5 border rounded-sm ${project.status.includes('WIP') ? 'bg-orange/10 border-orange text-orange' : 'bg-green/10 border-green text-green'}`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col gap-4">
              <div className="text-xs text-muted font-sans">{project.pkg}</div>
              <div className="text-sm font-sans flex-grow leading-relaxed">{project.description}</div>
              
              <div className="flex flex-wrap gap-2 text-xs font-sans">
                {project.tags.map(tag => (
                  <span key={tag} className="text-blue">[{tag}]</span>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs text-center bg-black/20 p-2 rounded-sm font-sans mt-auto border border-border">
                <div><div className="text-text font-bold">{project.metrics.v1}</div>{project.metrics.l1}</div>
                <div><div className="text-text font-bold">{project.metrics.v2}</div>{project.metrics.l2}</div>
                <div><div className="text-text font-bold">{project.metrics.v3}</div>{project.metrics.l3}</div>
              </div>
            </div>
            
            <div className="p-4 border-t border-border flex flex-col justify-center">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline py-2 px-3 text-xs w-full justify-center text-center">
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}