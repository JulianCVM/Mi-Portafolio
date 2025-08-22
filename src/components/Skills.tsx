'use client'

import { FaCode, FaServer, FaTools, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaDatabase, FaGithub, FaDocker, FaFigma, FaBolt, FaCloud, FaPython } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiJavascript, SiTailwindcss, SiTypescript, SiSpringboot, SiFirebase, SiObsidian, SiNotion, SiXampp, SiPostman, SiFlutter, SiDart, SiSharp, SiLaravel, SiDotnet } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { VscCode, VscVm } from 'react-icons/vsc'
import { useLanguage } from '@/context/LanguageContext'

export default function Skills() {
  const { t } = useLanguage();

  const skills = {
    languages: {
      title: 'Lenguajes de Programación',
      icon: <FaCode className="text-green-400 w-6 h-6" />,
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-5 h-5" /> },
        { name: 'Python', icon: <FaPython className="text-blue-600 w-5 h-5" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 w-5 h-5" /> },
        { name: 'C#', icon: <SiSharp className="text-purple-600 w-5 h-5" /> },
        { name: 'Java', icon: <FaJava className="text-red-500 w-5 h-5" /> },
        { name: 'PHP', icon: <FaPhp className="text-indigo-600 w-5 h-5" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 w-5 h-5" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 w-5 h-5" /> }
      ]
    },
    frameworks: {
      title: t('skills.frameworks'),
      icon: <FaServer className="text-blue-400 w-6 h-6" />,
      skills: [
        { name: 'Laravel', icon: <SiLaravel className="text-red-500 w-5 h-5" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600 w-5 h-5" /> },
        { name: '.NET', icon: <SiDotnet className="text-purple-600 w-5 h-5" /> },
        { name: 'Laragon', icon: <FaServer className="text-blue-500 w-5 h-5" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 w-5 h-5" /> }
      ]
    },
    paradigms: {
      title: 'Paradigmas y Patrones',
      icon: <FaCode className="text-purple-400 w-6 h-6" />,
      skills: [
        { name: 'Programación Orientada a Objetos', icon: <FaCode className="text-blue-500 w-5 h-5" /> },
        { name: 'Programación Funcional', icon: <FaCode className="text-green-500 w-5 h-5" /> },
        { name: 'Arquitectura MVC', icon: <FaServer className="text-purple-500 w-5 h-5" /> },
        { name: 'API REST', icon: <FaServer className="text-indigo-500 w-5 h-5" /> },
        { name: 'Patrón Repository', icon: <FaDatabase className="text-cyan-500 w-5 h-5" /> },
        { name: 'Inyección de Dependencias', icon: <FaCode className="text-orange-500 w-5 h-5" /> },
        { name: 'SOLID Principles', icon: <FaCode className="text-red-500 w-5 h-5" /> },
        { name: 'Clean Architecture', icon: <FaServer className="text-teal-500 w-5 h-5" /> }
      ]
    },
    databases: {
      title: t('skills.databases'),
      icon: <FaDatabase className="text-cyan-400 w-6 h-6" />,
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-blue-600 w-5 h-5" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800 w-5 h-5" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600 w-5 h-5" /> },
        { name: 'SQL Server', icon: <FaDatabase className="text-red-600 w-5 h-5" /> }
      ]
    },
    frontend: {
      title: 'Tecnologías Frontend (Básico)',
      icon: <FaReact className="text-blue-400 w-6 h-6" />,
      skills: [
        { name: 'React (Básico)', icon: <FaReact className="text-blue-400 w-5 h-5" /> },
        { name: 'Next.js (Básico)', icon: <TbBrandNextjs className="text-gray-800 dark:text-white w-5 h-5" /> },
        { name: 'Tailwind CSS (Básico)', icon: <SiTailwindcss className="text-cyan-400 w-5 h-5" /> }
      ]
    },
    tools: {
      title: t('skills.tools'),
      icon: <FaTools className="text-amber-400 w-6 h-6" />,
      skills: [
        { name: 'Postman', icon: <SiPostman className="text-orange-500 w-5 h-5" /> },
        { name: 'ThunderClient', icon: <FaBolt className="text-blue-600 w-5 h-5" /> },
        { name: 'Git', icon: <FaCode className="text-orange-600 w-5 h-5" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-300 w-5 h-5" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-amber-500 w-5 h-5" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500 w-5 h-5" /> },
        { name: 'Visual Studio Code', icon: <VscCode className="text-blue-600 w-5 h-5" /> },
        { name: 'Figma', icon: <FaFigma className="text-purple-500 w-5 h-5" /> },
        { name: 'Máquinas Virtuales', icon: <VscVm className="text-gray-400 w-5 h-5" /> },
        { name: 'XAMPP', icon: <SiXampp className="text-orange-500 w-5 h-5" /> },
        { name: 'WAMP', icon: <FaServer className="text-green-500 w-5 h-5" /> },
        { name: 'Obsidian', icon: <SiObsidian className="text-purple-700 w-5 h-5" /> },
        { name: 'Joplin', icon: <VscCode className="text-green-600 w-5 h-5" /> },
        { name: 'Notion', icon: <SiNotion className="text-gray-300 w-5 h-5" /> },
        { name: 'Render', icon: <FaCloud className="text-blue-500 w-5 h-5" /> }
      ]
    }
  };



  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-950 text-gray-800 dark:text-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12 text-gray-800 dark:text-white">{t('skills.title')}</h2>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Lenguajes de Programación - Tarjeta verde */}
          <div className="bg-gradient-to-r from-green-100/80 to-green-50/60 dark:from-green-950/40 dark:to-green-900/30 rounded-xl border border-green-300/50 dark:border-green-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaCode className="text-green-600 dark:text-green-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">{skills.languages.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.languages.skills.map((skill) => (
                <div key={skill.name} className="flex items-center py-3 px-4 bg-white/70 dark:bg-gray-900/60 border border-green-200/50 dark:border-green-800/30 rounded-lg hover:bg-green-50/80 dark:hover:bg-gray-800/90 transition-colors">
                  <div className="mr-3">{skill.icon}</div>
                  <span className="text-gray-800 dark:text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frameworks - Tarjeta azul */}
          <div className="bg-gradient-to-r from-blue-100/80 to-blue-50/60 dark:from-blue-950/40 dark:to-blue-900/30 rounded-xl border border-blue-300/50 dark:border-blue-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaServer className="text-blue-600 dark:text-blue-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{skills.frameworks.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {skills.frameworks.skills.map((skill) => (
                <div key={skill.name} className="flex items-center py-3 px-4 bg-white/70 dark:bg-gray-900/60 border border-blue-200/50 dark:border-blue-800/30 rounded-lg hover:bg-blue-50/80 dark:hover:bg-gray-800/90 transition-colors">
                  <div className="mr-3">{skill.icon}</div>
                  <span className="text-gray-800 dark:text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Paradigmas y Patrones - Tarjeta morada */}
          <div className="bg-gradient-to-r from-purple-100/80 to-purple-50/60 dark:from-purple-950/40 dark:to-purple-900/30 rounded-xl border border-purple-300/50 dark:border-purple-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaCode className="text-purple-600 dark:text-purple-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{skills.paradigms.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.paradigms.skills.map((skill) => (
                <div key={skill.name} className="flex items-center py-3 px-4 bg-white/70 dark:bg-gray-900/60 border border-purple-200/50 dark:border-purple-800/30 rounded-lg hover:bg-purple-50/80 dark:hover:bg-gray-800/90 transition-colors">
                  <div className="mr-3">{skill.icon}</div>
                  <span className="text-gray-800 dark:text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bases de Datos - Tarjeta cyan */}
          <div className="bg-gradient-to-r from-cyan-100/80 to-cyan-50/60 dark:from-cyan-950/40 dark:to-cyan-900/30 rounded-xl border border-cyan-300/50 dark:border-cyan-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaDatabase className="text-cyan-600 dark:text-cyan-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">{skills.databases.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.databases.skills.map((skill) => (
                <div key={skill.name} className="flex items-center py-3 px-4 bg-white/70 dark:bg-gray-900/60 border border-cyan-200/50 dark:border-cyan-800/30 rounded-lg hover:bg-cyan-50/80 dark:hover:bg-gray-800/90 transition-colors">
                  <div className="mr-3">{skill.icon}</div>
                  <span className="text-gray-800 dark:text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frontend (Básico) - Tarjeta de menor prominencia */}
          <div className="bg-gradient-to-r from-gray-100/80 to-gray-50/60 dark:from-gray-950/40 dark:to-gray-900/30 rounded-xl border border-gray-300/50 dark:border-gray-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaReact className="text-gray-600 dark:text-gray-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-400">{skills.frontend.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skills.frontend.skills.map((skill) => (
                <div key={skill.name} className="flex items-center py-3 px-4 bg-white/70 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-800/30 rounded-lg hover:bg-gray-50/80 dark:hover:bg-gray-800/90 transition-colors">
                  <div className="mr-3">{skill.icon}</div>
                  <span className="text-gray-800 dark:text-white text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Herramientas - Tarjeta morada */}
          <div className="bg-gradient-to-r from-purple-100/80 to-purple-50/60 dark:from-purple-950/40 dark:to-purple-900/30 rounded-xl border border-purple-300/50 dark:border-purple-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaTools className="text-purple-600 dark:text-purple-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">{t('skills.tools')}</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {skills.tools.skills.map((skill) => (
                <div key={skill.name} className="flex items-center py-2 px-3 bg-white/70 dark:bg-gray-900/60 border border-purple-200/50 dark:border-purple-800/30 rounded-lg hover:bg-purple-50/80 dark:hover:bg-gray-800/90 transition-colors">
                  <div className="mr-3">{skill.icon}</div>
                  <span className="text-gray-800 dark:text-white text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 