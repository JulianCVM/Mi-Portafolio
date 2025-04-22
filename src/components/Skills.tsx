'use client'

export default function Skills() {
  const skills = {
    frontend: [
      'HTML5',
      'CSS3',
      'JavaScript'
    ],
    frameworks: [
      'Aprendiendo React',
      'Aprendiendo Tailwind CSS'
    ],
    backend: [
      'Node.js',
      'Express',
      'MongoDB',
      'SQL',
      'RESTful APIs',
      'Java',
      'Spring Tools',
      'PHP',
      'Laragon',
      'MySQL',
      'PostgreSQL'
    ],
    tools: [
      'Postman',
      'ThunderClient',
      'Git',
      'GitHub',
      'Firebase',
      'Docker',
      'Visual Studio Code',
      'Figma',
      'Máquinas Virtuales',
      'XAMPP',
      'WAMP',
      'Obsidian',
      'Joplin',
      'Notion',
      'Render'
    ]
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Mis Habilidades</h2>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Frontend y Frameworks */}
          <div className="bg-white dark:bg-secondary shadow-lg rounded-xl p-8 border border-accent dark:border-primary-dark">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Frontend
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {skills.frontend.map((skill) => (
                    <div key={skill} className="flex items-center px-4 py-2 bg-accent dark:bg-gray-800 rounded-lg">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  Frameworks
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {skills.frameworks.map((skill) => (
                    <div key={skill} className="flex items-center px-4 py-2 bg-accent dark:bg-gray-800 rounded-lg">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-secondary shadow-lg rounded-xl p-8 border border-accent dark:border-primary-dark">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Backend
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.backend.map((skill) => (
                <div key={skill} className="flex items-center px-4 py-2 bg-accent dark:bg-gray-800 rounded-lg">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Herramientas */}
          <div className="bg-white dark:bg-secondary shadow-lg rounded-xl p-8 border border-accent dark:border-primary-dark">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Herramientas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.tools.map((skill) => (
                <div key={skill} className="flex items-center px-4 py-2 bg-accent dark:bg-gray-800 rounded-lg">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 