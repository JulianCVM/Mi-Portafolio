'use client'

import { FaGraduationCap, FaBriefcase, FaCode, FaMusic, FaLaptopCode, FaDatabase, FaJava, FaPython, FaServer, FaPhp } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiPostgresql, SiJavascript } from 'react-icons/si'
import { TbBrandCodesandbox } from 'react-icons/tb'
import { IoLayersOutline } from 'react-icons/io5'
import { GiCubeforce } from 'react-icons/gi'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-900 rounded-full -mr-32 -mt-32 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 dark:bg-green-900 rounded-full -ml-32 -mb-32 opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title text-center mb-12 text-white">Sobre Mí</h2>
        
        {/* Diseño tipo dashboard con grid - mejorada la distribución */}
        <div className="max-w-6xl mx-auto">
          
          {/* Fila principal - Perfil e introducción */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Tarjeta de perfil */}
            <div className="lg:col-span-4">
              <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-5">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-700 dark:bg-gray-700 mb-5 shadow-md">
                    <img 
                      src="/placeholder-profile.jpg"
                      alt="Julián Villamizar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-700 dark:bg-gray-700 rounded-lg shadow-sm">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-2 rounded-full flex-shrink-0">
                        <FaGraduationCap className="h-5 w-5" />
                      </span>
                      <div className="text-base font-semibold text-white dark:text-white">Estudiante</div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-700 dark:bg-gray-700 rounded-lg shadow-sm">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-2 rounded-full flex-shrink-0">
                        <FaBriefcase className="h-5 w-5" />
                      </span>
                      <div className="text-base font-semibold text-white dark:text-white">Full Stack</div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-700 dark:bg-gray-700 rounded-lg shadow-sm">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 p-2 rounded-full flex-shrink-0">
                        <FaMusic className="h-5 w-5" />
                      </span>
                      <div className="text-base font-semibold text-white dark:text-white">Amante de la música</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tarjeta de introducción */}
            <div className="lg:col-span-8">
              <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg h-full flex flex-col justify-center p-8">
                <div className="space-y-5">
                  <p className="text-gray-300 dark:text-gray-300 leading-relaxed text-lg">
                    ¡Hola! Soy <span className="font-bold text-green-400 dark:text-green-400">Julián Villamizar</span>, tengo 19 años y soy estudiante de Tecnología en Desarrollo de Sistemas Informáticos en las Unidades Tecnológicas de Santander (UTS).
                  </p>
                  
                  <p className="text-gray-300 dark:text-gray-300 leading-relaxed text-lg">
                    Actualmente también formo parte del programa de formación intensiva en Campuslands, donde he tenido la oportunidad de aplicar mis conocimientos en entornos reales de desarrollo y colaborar activamente como programador dentro de un equipo multidisciplinario.
                  </p>
                  
                  <p className="text-gray-300 dark:text-gray-300 leading-relaxed text-lg">
                    Me apasiona el aprendizaje continuo, la investigación tecnológica y los desafíos que me permiten crecer tanto a nivel técnico como personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Encabezado de Habilidades Técnicas */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl mb-8">
            <div className="flex items-center gap-3">
              <FaCode className="h-6 w-6 text-green-400 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-white dark:text-white">Habilidades Técnicas</h3>
            </div>
          </div>
          
          {/* Habilidades técnicas - Diseño mejorado con cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Paradigmas y Patrones */}
            <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-900/30 px-4 py-3 border-l-4 border-green-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-200 dark:text-gray-200">
                  <IoLayersOutline className="text-green-400 dark:text-green-400" />
                  <span>Paradigmas y Patrones</span>
                </h4>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-white dark:text-white">Programación Orientada a Objetos</div>
                    <div className="text-sm text-gray-300 dark:text-gray-300">Encapsulamiento, Herencia, Polimorfismo</div>
                  </div>
                </div>
                <div className="flex items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-white dark:text-white">Patrón MVC</div>
                    <div className="text-sm text-gray-300 dark:text-gray-300">Modelo-Vista-Controlador</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lenguajes de Programación */}
            <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-900/30 px-4 py-3 border-l-4 border-blue-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-200 dark:text-gray-200">
                  <FaCode className="text-blue-400 dark:text-blue-400" />
                  <span>Lenguajes de Programación</span>
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                    <FaJava className="text-3xl text-red-600 dark:text-red-400 mb-2" />
                    <div className="font-medium text-center text-white dark:text-white">Java</div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                    <SiJavascript className="text-3xl text-yellow-500 dark:text-yellow-400 mb-2" />
                    <div className="font-medium text-center text-white dark:text-white">JavaScript</div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                    <FaPhp className="text-3xl text-indigo-600 dark:text-indigo-400 mb-2" />
                    <div className="font-medium text-center text-white dark:text-white">PHP</div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                    <FaPython className="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
                    <div className="font-medium text-center text-white dark:text-white">Python</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arquitecturas */}
            <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-purple-900/30 px-4 py-3 border-l-4 border-purple-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-200 dark:text-gray-200">
                  <GiCubeforce className="text-purple-400 dark:text-purple-400" />
                  <span>Arquitecturas</span>
                </h4>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-white dark:text-white">Arquitectura Hexagonal</div>
                    <div className="text-sm text-gray-300 dark:text-gray-300">Ports & Adapters, aislamiento del dominio</div>
                  </div>
                </div>
                <div className="flex items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <div className="mr-3 w-2 h-10 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-white dark:text-white">Vertical Slicing</div>
                    <div className="text-sm text-gray-300 dark:text-gray-300">Organización por capacidades de negocio</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Frameworks */}
            <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-indigo-900/30 px-4 py-3 border-l-4 border-indigo-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-200 dark:text-gray-200">
                  <FaServer className="text-indigo-400 dark:text-indigo-400" />
                  <span>Frameworks</span>
                </h4>
              </div>
              <div className="p-5">
                <div className="flex items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  <SiSpringboot className="text-3xl text-green-600 dark:text-green-400 mr-3" />
                  <div>
                    <div className="font-medium text-white dark:text-white">Spring Boot</div>
                    <div className="text-sm text-gray-300 dark:text-gray-300">Desarrollo de aplicaciones Java</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bases de Datos */}
            <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-cyan-900/30 px-4 py-3 border-l-4 border-cyan-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-200 dark:text-gray-200">
                  <FaDatabase className="text-cyan-400 dark:text-cyan-400" />
                  <span>Bases de Datos</span>
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                    <SiMysql className="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
                    <div className="font-medium text-center text-white dark:text-white">MySQL</div>
                  </div>
                  <div className="flex flex-col items-center bg-gray-700 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                    <SiPostgresql className="text-3xl text-blue-800 dark:text-blue-500 mb-2" />
                    <div className="font-medium text-center text-white dark:text-white">PostgreSQL</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Aprendizaje Continuo */}
            <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-teal-900/30 px-4 py-3 border-l-4 border-teal-500">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-200 dark:text-gray-200">
                  <TbBrandCodesandbox className="text-teal-400 dark:text-teal-400" />
                  <span>Aprendizaje Continuo</span>
                </h4>
              </div>
              <div className="p-5">
                <div className="mb-2 text-center text-gray-300 dark:text-gray-300">
                  Siempre en búsqueda de nuevos conocimientos y tecnologías
                </div>
                <div className="w-full bg-gray-600 dark:bg-gray-600 rounded-full h-3">
                  <div className="bg-gradient-to-r from-teal-400 via-green-500 to-green-600 h-3 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Perfil Personal */}
          <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="bg-green-900/30 px-5 py-3 border-l-4 border-green-500">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white dark:text-white">
                <FaLaptopCode className="h-5 w-5 text-green-400 dark:text-green-400" />
                <span>Perfil Personal</span>
              </h3>
            </div>
            <div className="p-6">
              <div className="bg-gray-700 dark:bg-gray-700 rounded-lg p-5">
                <p className="text-gray-300 dark:text-gray-300 leading-relaxed text-lg">
                  Soy una persona con gran capacidad de adaptabilidad, comunicación efectiva y una visión analítica que me permite entender y resolver problemas desde diferentes perspectivas. Me interesa profundamente el desarrollo full stack, con una proyección clara hacia el liderazgo técnico y la gestión de proyectos tecnológicos, áreas en las que aspiro consolidar mi carrera como futuro ingeniero de sistemas.
                </p>
                
                <p className="text-gray-300 dark:text-gray-300 leading-relaxed text-lg mt-4">
                  Más allá del mundo del código, me encanta la música clásica, ya que me ayuda a concentrarme y mantenerme enfocado. Siempre estoy en búsqueda de nuevas tecnologías que pueda aprender y aplicar para crear soluciones reales que impacten positivamente.
                </p>
              </div>
            </div>
          </div>
          
          {/* Educación y Experiencia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Educación */}
            <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-900/30 px-5 py-3 border-l-4 border-blue-500">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white dark:text-white">
                  <FaGraduationCap className="h-5 w-5 text-blue-400 dark:text-blue-400" />
                  <span>Educación</span>
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li className="bg-gray-700 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-white dark:text-white">Tecnología en Desarrollo de Sistemas Informáticos</div>
                    <div className="text-gray-300 dark:text-gray-300 text-sm mt-1">Unidades Tecnológicas de Santander (UTS)</div>
                    <div className="text-gray-300 dark:text-gray-300 text-sm mt-1">En curso</div>
                  </li>
                  <li className="bg-gray-700 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-white dark:text-white">Programa de Formación</div>
                    <div className="text-gray-300 dark:text-gray-300 text-sm mt-1">Campuslands</div>
                    <div className="text-gray-300 dark:text-gray-300 text-sm mt-1">En curso</div>
                  </li>
                  <li className="bg-gray-700 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-white dark:text-white">Certificación de Inglés B1</div>
                    <div className="text-gray-300 dark:text-gray-300 text-sm mt-1">Curso de Inglés</div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Experiencia */}
            <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-900/30 px-5 py-3 border-l-4 border-green-500">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white dark:text-white">
                  <FaBriefcase className="h-5 w-5 text-green-400 dark:text-green-400" />
                  <span>Experiencia</span>
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li className="bg-gray-700 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-white dark:text-white">Desarrollador - Solvo Global</div>
                    <div className="text-gray-300 dark:text-gray-300 text-sm mt-1">Enero 2024 - Presente</div>
                    <div className="text-sm text-gray-300 dark:text-gray-300 mt-2">Trabajo como desarrollador en una célula de desarrollo, aplicando conocimientos técnicos en proyectos reales.</div>
                  </li>
                  <li className="bg-gray-700 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-medium text-white dark:text-white">Proyecto Académico</div>
                    <div className="text-gray-300 dark:text-gray-300 text-sm mt-1">Prototipo de Aplicación Móvil</div>
                    <div className="text-sm text-gray-300 dark:text-gray-300 mt-2">Desarrollo de un prototipo de aplicación móvil como proyecto de grado.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 