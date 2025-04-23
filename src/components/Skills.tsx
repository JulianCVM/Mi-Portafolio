'use client'

import { FaCode, FaServer, FaTools, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaDatabase, FaGithub, FaDocker, FaFigma, FaBolt, FaCloud } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiJavascript, SiTailwindcss, SiTypescript, SiSpringboot, SiFirebase, SiObsidian, SiNotion, SiXampp, SiPostman } from 'react-icons/si'
import { TbBrandNextjs, TbCode } from 'react-icons/tb'
import { VscCode, VscVm } from 'react-icons/vsc'

export default function Skills() {
  const skills = {
    frontend: {
      title: 'Frontend',
      icon: <FaCode className="text-green-400 w-6 h-6" />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 w-5 h-5" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 w-5 h-5" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 w-5 h-5" /> }
      ]
    },
    frameworks: {
      title: 'Frameworks',
      icon: <FaReact className="text-blue-400 w-6 h-6" />,
      skills: [
        { name: 'Aprendiendo React', icon: <FaReact className="text-blue-400 w-5 h-5" /> },
        { name: 'Aprendiendo Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 w-5 h-5" /> }
      ]
    },
    backend: {
      title: 'Backend',
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
      title: 'Herramientas',
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
      title: "JavaScript Backend",
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: "Java Backend",
      skills: ['Java', 'Spring Tools']
    },
    {
      title: "PHP Backend",
      skills: ['PHP', 'Laragon']
    },
    {
      title: "Bases de Datos",
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL']
    },
    {
      title: "API Development",
      skills: ['RESTful APIs']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950 dark:bg-gray-950 text-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12 text-white">Mis Habilidades</h2>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Frontend y Frameworks - Tarjeta verde */}
          <div className="bg-gradient-to-r from-green-950/40 to-green-900/30 rounded-xl border border-green-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaCode className="text-green-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-green-400">Frontend</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                {skills.frontend.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center py-2 px-4 bg-gray-900/60 border border-green-800/30 rounded-lg mb-2 hover:bg-gray-800/90 transition-colors">
                    <div className="mr-3">{skill.icon}</div>
                    <span className="text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="col-span-2">
                <div className="h-full flex flex-col justify-center">
                  <div className="bg-gray-900/60 border border-green-800/30 rounded-xl p-4 mb-4">
                    <h4 className="text-lg font-medium text-green-400 mb-2 flex items-center">
                      <FaReact className="text-blue-400 mr-2" />
                      Frameworks
                    </h4>
                    {skills.frameworks.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center py-2 px-4 bg-gray-800/90 rounded-lg mb-2 hover:bg-gray-700 transition-colors">
                        <div className="mr-3">{skill.icon}</div>
                        <span className="text-white">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Backend - Tarjeta azul con agrupaciones */}
          <div className="bg-gradient-to-r from-blue-950/40 to-blue-900/30 rounded-xl border border-blue-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaServer className="text-blue-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-blue-400">Backend</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {backendGroups.map((group) => (
                <div key={group.title} className="bg-gray-900/60 border border-blue-800/30 rounded-xl p-4">
                  <h4 className="text-lg font-medium text-blue-400 mb-2">{group.title}</h4>
                  {group.skills.map((skillName) => {
                    const skill = skills.backend.skills.find(s => s.name === skillName);
                    return skill ? (
                      <div key={skill.name} className="flex items-center py-2 px-4 bg-gray-800/90 rounded-lg mb-2 hover:bg-gray-700 transition-colors">
                        <div className="mr-3">{skill.icon}</div>
                        <span className="text-white">{skill.name}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              ))}
            </div>
          </div>
          
          {/* Herramientas - Tarjeta morada */}
          <div className="bg-gradient-to-r from-purple-950/40 to-purple-900/30 rounded-xl border border-purple-800/30 p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaTools className="text-purple-400 h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-purple-400">Herramientas</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {skills.tools.skills.map((skill) => (
                <div key={skill.name} className="flex items-center py-2 px-3 bg-gray-900/60 border border-purple-800/30 rounded-lg hover:bg-gray-800/90 transition-colors">
                  <div className="mr-3">{skill.icon}</div>
                  <span className="text-white text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 