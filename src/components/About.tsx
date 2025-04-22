'use client'

import { FaGraduationCap, FaBriefcase, FaCode, FaMusic, FaLaptopCode, FaDatabase, FaJava, FaPython, FaServer, FaPhp } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiPostgresql, SiJavascript } from 'react-icons/si'
import { TbBrandCodesandbox } from 'react-icons/tb'
import { IoLayersOutline } from 'react-icons/io5'
import { GiCubeforce } from 'react-icons/gi'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-secondary relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-900 rounded-full -mr-32 -mt-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 dark:bg-green-900 rounded-full -ml-32 -mb-32 opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title text-center mb-12">Sobre Mí</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Columna de perfil */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 mb-6 shadow-md max-w-xs mx-auto lg:mx-0">
                  {/* Imagen de perfil */}
                  <img 
                    src="/placeholder-profile.jpg"
                    alt="Julián Villamizar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-2 rounded-full flex-shrink-0">
                      <FaGraduationCap className="h-5 w-5" />
                    </span>
                    <div className="text-base font-semibold text-gray-800 dark:text-white">Estudiante</div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-2 rounded-full flex-shrink-0">
                      <FaBriefcase className="h-5 w-5" />
                    </span>
                    <div className="text-base font-semibold text-gray-800 dark:text-white">Full Stack</div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 p-2 rounded-full flex-shrink-0">
                      <FaMusic className="h-5 w-5" />
                    </span>
                    <div className="text-base font-semibold text-gray-800 dark:text-white">Amante de la música</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenido principal - ahora con 3/4 del espacio */}
            <div className="lg:w-3/4">
              <div className="prose prose-lg dark:prose-dark max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <div className="space-y-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        ¡Hola! Soy <span className="font-bold text-green-600 dark:text-green-400">Julián Villamizar</span>, tengo 19 años y soy estudiante de Tecnología en Desarrollo de Sistemas Informáticos en las Unidades Tecnológicas de Santander (UTS).
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Actualmente también formo parte del programa de formación intensiva en Campuslands, donde he tenido la oportunidad de aplicar mis conocimientos en entornos reales de desarrollo y colaborar activamente como programador dentro de un equipo multidisciplinario.
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Me apasiona el aprendizaje continuo, la investigación tecnológica y los desafíos que me permiten crecer tanto a nivel técnico como personal.
                      </p>
                    </div>
                  </div>
                
                  {/* Habilidades Técnicas - ahora con distribución 2 columnas */}
                  <div className="col-span-2">
                    <h3 className="flex items-center gap-3 text-xl font-bold text-gray-800 dark:text-white mb-6">
                      <FaCode className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span>Habilidades Técnicas</span>
                    </h3>
                  </div>
                  
                  {/* Columna izquierda - Paradigmas y Lenguajes */}
                  <div>
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                        <IoLayersOutline className="text-green-500 dark:text-green-400" />
                        <span>Paradigmas y Patrones</span>
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-800 dark:text-white">Programación Orientada a Objetos</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Encapsulamiento, Herencia, Polimorfismo</div>
                          </div>
                        </div>
                        <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-800 dark:text-white">Patrón MVC</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Modelo-Vista-Controlador</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                        <GiCubeforce className="text-green-500 dark:text-green-400" />
                        <span>Arquitecturas</span>
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-800 dark:text-white">Arquitectura Hexagonal</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Ports & Adapters, aislamiento del dominio</div>
                          </div>
                        </div>
                        <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-800 dark:text-white">Vertical Slicing</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Organización por capacidades de negocio</div>
                          </div>
                        </div>
                        <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-800 dark:text-white">MVW</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Model-View-Whatever, arquitectura flexible</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                        <FaDatabase className="text-green-500 dark:text-green-400" />
                        <span>Bases de Datos</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <SiMysql className="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
                          <div className="font-medium text-center text-gray-800 dark:text-white">MySQL</div>
                        </div>
                        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <SiPostgresql className="text-3xl text-blue-800 dark:text-blue-500 mb-2" />
                          <div className="font-medium text-center text-gray-800 dark:text-white">PostgreSQL</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Columna derecha - Lenguajes y Frameworks */}
                  <div>
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                        <FaCode className="text-green-500 dark:text-green-400" />
                        <span>Lenguajes de Programación</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <FaJava className="text-3xl text-red-600 dark:text-red-400 mb-2" />
                          <div className="font-medium text-center text-gray-800 dark:text-white">Java</div>
                        </div>
                        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <SiJavascript className="text-3xl text-yellow-500 dark:text-yellow-400 mb-2" />
                          <div className="font-medium text-center text-gray-800 dark:text-white">JavaScript</div>
                        </div>
                        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <FaPhp className="text-3xl text-indigo-600 dark:text-indigo-400 mb-2" />
                          <div className="font-medium text-center text-gray-800 dark:text-white">PHP</div>
                        </div>
                        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                          <FaPython className="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
                          <div className="font-medium text-center text-gray-800 dark:text-white">Python</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                        <FaServer className="text-green-500 dark:text-green-400" />
                        <span>Frameworks</span>
                      </h4>
                      <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                        <SiSpringboot className="text-3xl text-green-600 dark:text-green-400 mr-3" />
                        <div>
                          <div className="font-medium text-gray-800 dark:text-white">Spring Boot</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Desarrollo de aplicaciones Java</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Barra de progresión de aprendizaje */}
                  <div className="col-span-2 mt-2">
                    <h4 className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Continuo aprendizaje</h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                
                  {/* Perfil Personal */}
                  <div className="col-span-2 mt-6">
                    <h3 className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white mb-4">
                      <FaLaptopCode className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span>Perfil Personal</span>
                    </h3>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Soy una persona con gran capacidad de adaptabilidad, comunicación efectiva y una visión analítica que me permite entender y resolver problemas desde diferentes perspectivas. Me interesa profundamente el desarrollo full stack, con una proyección clara hacia el liderazgo técnico y la gestión de proyectos tecnológicos, áreas en las que aspiro consolidar mi carrera como futuro ingeniero de sistemas.
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                        Más allá del mundo del código, me encanta la música clásica, ya que me ayuda a concentrarme y mantenerme enfocado. Siempre estoy en búsqueda de nuevas tecnologías que pueda aprender y aplicar para crear soluciones reales que impacten positivamente.
                      </p>
                    </div>
                  </div>
                  
                  {/* Educación y Experiencia en dos columnas */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      <FaGraduationCap className="h-5 w-5 text-green-600 dark:text-green-400" />
                      Educación
                    </h3>
                    <ul className="space-y-3">
                      <li className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="font-medium text-gray-800 dark:text-white">Tecnología en Desarrollo de Sistemas Informáticos</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Unidades Tecnológicas de Santander (UTS)</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">En curso</div>
                      </li>
                      <li className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="font-medium text-gray-800 dark:text-white">Programa de Formación</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Campuslands</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">En curso</div>
                      </li>
                      <li className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="font-medium text-gray-800 dark:text-white">Certificación de Inglés B1</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Curso de Inglés</div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      <FaBriefcase className="h-5 w-5 text-green-600 dark:text-green-400" />
                      Experiencia
                    </h3>
                    <ul className="space-y-3">
                      <li className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="font-medium text-gray-800 dark:text-white">Desarrollador - Solvo Global</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Enero 2024 - Presente</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Trabajo como desarrollador en una célula de desarrollo, aplicando conocimientos técnicos en proyectos reales.</div>
                      </li>
                      <li className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <div className="font-medium text-gray-800 dark:text-white">Proyecto Académico</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Prototipo de Aplicación Móvil</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Desarrollo de un prototipo de aplicación móvil como proyecto de grado.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 