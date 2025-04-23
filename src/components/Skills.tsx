'use client'

import { FaCode, FaServer, FaTools, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaDatabase, FaGithub, FaDocker, FaFigma, FaBolt, FaCloud } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiJavascript, SiTailwindcss, SiTypescript, SiSpringboot, SiFirebase, SiObsidian, SiNotion, SiXampp, SiPostman, SiFlutter, SiDart } from 'react-icons/si'
import { TbBrandNextjs, TbCode } from 'react-icons/tb'
import { VscCode, VscVm } from 'react-icons/vsc'
import { useLanguage } from '@/context/LanguageContext'

export default function Skills() {
  const { t } = useLanguage();

  const skills = {
    frontend: {
      title: t('skills.frontend'),
      icon: <FaCode className="text-green-400 w-6 h-6" />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 w-5 h-5" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 w-5 h-5" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 w-5 h-5" /> }
      ]
    },
    frameworks: {
      title: t('skills.frameworks'),
      icon: <FaReact className="text-blue-400 w-6 h-6" />,
      skills: [
        { name: 'Aprendiendo React', icon: <FaReact className="text-blue-400 w-5 h-5" /> },
        { name: 'Aprendiendo Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 w-5 h-5" /> },
        { name: 'Flutter', icon: <SiFlutter className="text-blue-500 w-5 h-5" /> },
        { name: 'Dart', icon: <SiDart className="text-blue-600 w-5 h-5" /> }
      ]
    },
    backend: {
      title: t('skills.backend'),
      icon: <FaServer className="text-purple-400 w-6 h-6" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 w-5 h-5" /> },
        { name: 'Express', icon: <SiExpress className="text-gray-300 w-5 h-5" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600 w-5 h-5" /> },
        { name: 'SQL', icon: <FaDatabase className="text-blue-500 w-5 h-5" /> },
        { name: 'RESTful APIs', icon: <FaServer className="text-indigo-400 w-5 h-5" /> },
        { name: 'Java', icon: <FaJava className="text-red-500 w-5 h-5" /> },
        { name: 'Spring Tools', icon: <SiSpringboot className="text-green-600 w-5 h-5" /> },
        { name: 'PHP', icon: <FaPhp className="text-indigo-600 w-5 h-5" /> },
        { name: 'Laragon', icon: <FaServer className="text-blue-500 w-5 h-5" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-600 w-5 h-5" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800 w-5 h-5" /> }
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

  // Agrupar habilidades de backend por tecnologías relacionadas
  const backendGroups = [
    {
      title: t('skills.js.backend'),
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: t('skills.java.backend'),
      skills: ['Java', 'Spring Tools']
    },
    {
      title: t('skills.php.backend'),
      skills: ['PHP', 'Laragon']
    },
    {
      title: t('skills.databases'),
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL']
    },
    {
      title: t('skills.api'),
      skills: ['RESTful APIs']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-950 text-gray-800 dark:text-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12 text-gray-800 dark:text-white">{t('skills.title')}</h2>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Frontend y Frameworks - Tarjeta verde */}
          <div className="bg-gradient-to-r from-green-100/80 to-green-50/60 dark:from-green-950/40 dark:to-green-900/30 rounded-xl border border-green-300/50 dark:border-green-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaCode className="text-green-600 dark:text-green-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">{t('skills.frontend')}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                {skills.frontend.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center py-2 px-4 bg-white/70 dark:bg-gray-900/60 border border-green-200/50 dark:border-green-800/30 rounded-lg mb-2 hover:bg-green-50/80 dark:hover:bg-gray-800/90 transition-colors">
                    <div className="mr-3">{skill.icon}</div>
                    <span className="text-gray-800 dark:text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="col-span-2">
                <div className="h-full flex flex-col justify-center">
                  <div className="bg-white/70 dark:bg-gray-900/60 border border-green-200/50 dark:border-green-800/30 rounded-xl p-4 mb-4">
                    <h4 className="text-lg font-medium text-green-700 dark:text-green-400 mb-2 flex items-center">
                      <FaReact className="text-blue-600 dark:text-blue-400 mr-2" />
                      {t('skills.frameworks')}
                    </h4>
                    {skills.frameworks.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center py-2 px-4 bg-green-50/80 dark:bg-gray-800/90 rounded-lg mb-2 hover:bg-green-100/90 dark:hover:bg-gray-700 transition-colors">
                        <div className="mr-3">{skill.icon}</div>
                        <span className="text-gray-800 dark:text-white">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Backend - Tarjeta azul con agrupaciones */}
          <div className="bg-gradient-to-r from-blue-100/80 to-blue-50/60 dark:from-blue-950/40 dark:to-blue-900/30 rounded-xl border border-blue-300/50 dark:border-blue-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaServer className="text-blue-600 dark:text-blue-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{t('skills.backend')}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {backendGroups.map((group) => (
                <div key={group.title} className="bg-white/70 dark:bg-gray-900/60 border border-blue-200/50 dark:border-blue-800/30 rounded-xl p-4">
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-400 mb-2">{group.title}</h4>
                  {group.skills.map((skillName) => {
                    const skill = skills.backend.skills.find(s => s.name === skillName);
                    return skill ? (
                      <div key={skill.name} className="flex items-center py-2 px-4 bg-blue-50/80 dark:bg-gray-800/90 rounded-lg mb-2 hover:bg-blue-100/90 dark:hover:bg-gray-700 transition-colors">
                        <div className="mr-3">{skill.icon}</div>
                        <span className="text-gray-800 dark:text-white">{skill.name}</span>
                      </div>
                    ) : null;
                  })}
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